import './sass/popup-page.scss';

function onClick()
{
    chrome.runtime.openOptionsPage();
}

document.querySelector('#options')?.addEventListener('click', onClick);
