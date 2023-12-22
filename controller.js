function toast(occation, msg) {

    const toastLiveExample = document.getElementById('liveToast')

    document.getElementById("occation").innerHTML = occation;
    document.getElementById("message").innerHTML = msg;

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

    toastBootstrap.show()


}