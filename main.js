function abrirBarraPesquisa() {
    if(document.querySelector('.boxPesquisa-boxInput').style.width == 0){
        document.querySelector('.boxPesquisa-boxInput').style.width = '75%'
        document.querySelector('.boxPesquisa-boxInput').style.paddingLeft = '.5rem'
        // console.log(giraIcon())
        giraIcon()
    } 
    else {
        document.querySelector('.boxPesquisa-boxInput').style.width = null
        document.querySelector('.boxPesquisa-boxInput').style.paddingLeft = '0rem'
        giraIcon()
    }
    function giraIcon(){
        if (document.querySelector('.boxPesquisa-imgIcom').style.animationName == 'giraverco'){
            document.querySelector('.boxPesquisa-imgIcom').style.animationName = 'girafrente'
        }
        else {
            document.querySelector('.boxPesquisa-imgIcom').style.animationName = 'giraverco'
        }
    }
}