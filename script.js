document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ OptikCoin ecosystem script loaded');

  // === Wallet Connect Simulation ===
  const connectBtn = document.getElementById('connect-wallet');
  const walletInfo = document.getElementById('wallet-info');
  const walletBalance = document.getElementById('wallet-balance');
  const walletStatus = document.getElementById('wallet-status');
  const demoPublicKey = '0xALEXn123456789ABCDEF';

  if (connectBtn) {
    connectBtn.addEventListener('click', () => {
      walletInfo.textContent = `🔗 ${demoPublicKey.slice(0, 6)}...${demoPublicKey.slice(-4)}`;
      walletInfo.classList.remove('hidden');
      walletBalance.classList.remove('hidden');
      if (walletStatus) {
        walletStatus.classList.remove('hidden');
        walletStatus.innerHTML = `<strong>Wallet Connected</strong><br>${demoPublicKey}`;
      }
    });
  }

  // === Menu Toggle ===
  const menuBtn = document.getElementById('toggle-menu');
  const dropdown = document.getElementById('dropdown-menu');

  if (menuBtn && dropdown) {
    menuBtn.addEventListener('click', () => {
      dropdown.classList.toggle('hidden');
    });
  }

  // === Admin Navigation ===
  const navItems = document.querySelectorAll('.menu-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      dropdown.classList.add('hidden');
    });
  });

  // === Modal Integration ===
  const downloadBtn = document.getElementById('download-wallet');
  const walletModal = document.getElementById('wallet-modal');

  if (downloadBtn && walletModal) {
    downloadBtn.addEventListener('click', () => {
      walletModal.classList.remove('hidden');
    });
  }

  // === Close Modal on Escape ===
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && walletModal && !walletModal.classList.contains('hidden')) {
      walletModal.classList.add('hidden');
    }
  });

  // === KYC Modal Step Placeholder ===
  const kycModal = document.getElementById('kyc-modal');
  if (kycModal) {
    // Add logic here if needed
  }
});
