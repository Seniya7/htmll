const canvasEl = document.querySelector("canvas#neuro");
const devicePixelRatio = Math.min(window.devicePixelRatio, 2);

const pointer = {
    x: 0.5,
    y: 0.5,
    tX: 0.5,
    tY: 0.5
};

let uniforms;
const gl = initShader();

function initShader() {
    const vsSource = document.getElementById("vertShader").innerHTML;
    const fsSource = document.getElementById("fragShader").innerHTML;

    const gl = canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");

    if (!gl) {
        alert("WebGL is not supported by your browser.");
        return null;
    }

    function createShader(gl, sourceCode, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    gl.useProgram(shaderProgram);

    // Get uniforms
    uniforms = {
        u_time: gl.getUniformLocation(shaderProgram, "u_time"),
        u_ratio: gl.getUniformLocation(shaderProgram, "u_ratio"),
        u_pointer_position: gl.getUniformLocation(shaderProgram, "u_pointer_position")
    };

    // Create vertices
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Set up attributes
    const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    return gl;
}

function updateMousePosition(eX, eY) {
    pointer.tX = eX / window.innerWidth;
    pointer.tY = 1.0 - eY / window.innerHeight;
}

function render() {
    pointer.x += (pointer.tX - pointer.x) * 0.1;
    pointer.y += (pointer.tY - pointer.y) * 0.1;

    gl.uniform1f(uniforms.u_time, performance.now());
    gl.uniform2f(uniforms.u_pointer_position, pointer.x, pointer.y);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
}

function resizeCanvas() {
    canvasEl.width = window.innerWidth * devicePixelRatio;
    canvasEl.height = window.innerHeight * devicePixelRatio;
    gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
    gl.viewport(0, 0, canvasEl.width, canvasEl.height);
}

// Setup events
window.addEventListener("mousemove", (e) => {
    updateMousePosition(e.clientX, e.clientY);
});

window.addEventListener("touchmove", (e) => {
    updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
});

window.addEventListener("resize", resizeCanvas);

// Initialize
resizeCanvas();
render();