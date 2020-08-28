export const getScrollbarWidth = () => {
    const odiv = document.createElement('div'); //创建一个div

    odiv.style.cssText = 'width:100px;height:100px;overflow:scroll;';

    document.body.appendChild(odiv);

    const width = odiv.offsetWidth - odiv.clientWidth; //相减

    odiv.remove();

    return width;
};
