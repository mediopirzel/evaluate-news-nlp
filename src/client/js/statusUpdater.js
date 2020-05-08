function updateStatus(type='type_ok',message) {
    const statusList = document.getElementById('status');
    const htmlTextToAdd = `<li class="${type}">${message}</li>`;
    statusList.insertAdjacentHTML('beforeend', htmlTextToAdd);
}

export { updateStatus }
