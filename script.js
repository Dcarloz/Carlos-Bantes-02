// A função que é chamada quando o jogador clica em um botão
function proximaEtapa(idDaProximaEtapa) {
    // 1. Esconder a tela atual (a tela que possui o botão clicado)
    // Isso é feito pegando o elemento pai do botão (a div da etapa atual)
    let etapaAtual = event.target.closest('.tela-jogo');
    etapaAtual.style.display = 'none';

    // 2. Mostrar a próxima tela
    let proxima = document.getElementById(idDaProximaEtapa);
    proxima.style.display = 'block';

    // 3. (Opcional) Rolar para o topo da página para garantir que o usuário veja o novo conteúdo
    window.scrollTo(0, 0);
}

// 4. Iniciar o jogo
// Por padrão, todas as etapas (exceto a 1) estarão escondidas via CSS.
// O jogo começa mostrando apenas a 'etapa1'.
document.addEventListener('DOMContentLoaded', () => {
    // Esconder todas, exceto a primeira
    document.querySelectorAll('.tela-jogo').forEach(tela => {
        tela.style.display = 'none';
    });
    document.getElementById('etapa1').style.display = 'block';
});