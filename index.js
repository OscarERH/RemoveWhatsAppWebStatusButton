const targetNode = document.querySelector("body");
const config = { attributes: true, childList: true, subtree: true };

const callback = function (mutationsList, observer) {
  const statusButton = document.querySelector('[title="Status"]');
  for (const mutation of mutationsList) {
    if (statusButton) {
      statusButton.remove();
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
