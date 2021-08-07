(() => {

    let draggingElem;

    function onDragStart() {
        draggingElem = this;
    }

    function onDrop() {
        this.append(draggingElem);
        draggingElem = null;
    }

    function onDragover(event) {
        event.preventDefault();
    }
    function onDragEnter(event) {
        event.preventDefault();
    }
    function run() {
        const taskElems = Array.from(document.querySelectorAll('.task'));
        const fillDownElems = Array.from(document.querySelectorAll('.fill-down'));

        taskElems.forEach((taskElem) => {
        taskElem.addEventListener('dragstart', onDragStart);
        });

        fillDownElems.forEach((fillDownElem) => {
            fillDownElem.addEventListener('drop', onDrop);
            fillDownElem.addEventListener('dragover', onDragover);
            fillDownElem.addEventListener('dragenter', onDragEnter);
        });
    }

    run();
})();