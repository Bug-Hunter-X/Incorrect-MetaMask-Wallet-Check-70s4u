function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have a wallet installed!');
    return;
  }
  if (ethereum.isMetaMask) {
    console.log('MetaMask is connected');
  } else {
    console.log('Another wallet is connected');
  }
}