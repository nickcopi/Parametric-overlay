(()=>{
    let makeHell = ()=>{
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        canvas.style.left = 0 + 'px';
        canvas.style.top = 0 + 'px';
        canvas.style.position = 'fixed';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);
        let t = 0;
        let x = 0;
        let y = 0;
        let func1 = n=>2 * Math.cos(n) + Math.sin(2 * n) * Math.cos(60 * n);
        let func2 = n=>Math.sin(2 * n) + Math.sin(1 * n);
        let update = ()=>{
            x = innerWidth / 2 + 150 * func1(t);
            y = innerHeight / 2 + 150 * func2(t);
            t += 0.001;
        }
        let render = ()=>{
            //ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle = 'green'
            ctx.fillRect(x, y, 2, 2);
        }
        let interval = setInterval(()=>{
            update();
            render();
        }
        , 1)
    }

    window.addEventListener('keypress', e=>{
        if (e.keyCode !== 96)
            return;
            makeHell();

    }
    );
}
)();
