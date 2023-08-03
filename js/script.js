const loadingArea=document.querySelector('#loading');
const loadingText=document.querySelector('#loading p');

window.addEventListener('load',()=>{
    //ローディング中
    loadingArea.animate(
        {
            backdropFilter:['blur(10px)','blur(0)'],
            background:['rgba(255,255,178,1)','rgba(255,255,178,0)'],
            visibility:'hidden',
        },
        {
            duration:2000,
            delay:1200,
            easing:'ease',
            fill:'forwards',
        }
    );
    //ローディング中テキスト
    loadingText.animate(
        [
        {
            opacity:1,
            offset:.8 //80%
        },
        {
            opacity:0,
            offset:1 //100%
        },
        ],
        {
            duration:1200,
            easing:'ease',
            fill:'forwards',
        }   
    );
});