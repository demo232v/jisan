(function updateAllBalances() {
    // উপরের Estimated Balance এলিমেন্ট খুঁজে বের করুন
    const balanceElement = document.getElementById('btn-EstimatedBalanceV2-formatBalance');

    // উপরের Fiat Value এলিমেন্ট খুঁজে বের করুন
    const fiatElement = document.getElementById('btn-EstimatedBalanceV2-balanceToFiat');

    // নতুন এলিমেন্টের ক্রিপ্টো ব্যালেন্স এবং ফিয়াট ভ্যালু এলিমেন্ট খুঁজে বের করুন
    const cryptoElement = document.querySelector('.text-right .body2');
    const cryptoFiatElement = document.querySelector('.text-right .body3');

    if (balanceElement && fiatElement && cryptoElement && cryptoFiatElement) {
        // নতুন ব্যালেন্স ইনপুট চাইতে একটি প্রম্পট ব্যবহার করুন
        const newBalance = prompt("Enter the new balance:", balanceElement.innerText);

        if (newBalance !== null) {
            // উপরের Estimated Balance আপডেট করুন
            balanceElement.innerText = newBalance;

            // একটি নির্ধারিত রেট অনুযায়ী Fiat Value হিসাব করুন (উদাহরণ: 1 USDT = $1)
            const conversionRate = 1.00; // এখানে আপনার রেট দিন
            const fiatValue = (parseFloat(newBalance) * conversionRate).toFixed(6);

            // Fiat Value আপডেট করুন
            fiatElement.innerText = ` ≈ $${parseFloat(fiatValue).toString()}`;

            // নতুন এলিমেন্টের ক্রিপ্টো ব্যালেন্স আপডেট করুন
            cryptoElement.innerText = newBalance;

            // নতুন এলিমেন্টের Fiat Value আপডেট করুন (শেষের অতিরিক্ত শূন্য সরিয়ে)
            cryptoFiatElement.innerText = `$${parseFloat(fiatValue).toString()}`;
        }
    } else {
        console.error("One or more elements not found!");
    }
})();
(function createPopup() {
    // পপআপ তৈরি করার জন্য একটি ডিভ তৈরি করুন
    const popup = document.createElement('div');

    // পপআপের স্টাইল সেট করুন
    popup.style.position = 'fixed';
    popup.style.top = '-100px'; // স্ক্রিনের বাইরে শুরু
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = '#28a745'; // সবুজ ব্যাকগ্রাউন্ড
    popup.style.color = '#fff'; // সাদা টেক্সট
    popup.style.padding = '15px 30px';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    popup.style.fontSize = '16px';
    popup.style.fontWeight = 'bold';
    popup.style.zIndex = '9999';
    popup.style.transition = 'all 0.5s ease'; // smooth animation

    // পপআপের টেক্সট নির্ধারণ করুন
    popup.innerText = 'Welcome For Jisan X';

    // পপআপটি body-তে যোগ করুন
    document.body.appendChild(popup);

    // পপআপ স্ক্রিনে আনুন
    setTimeout(() => {
        popup.style.top = '20px'; // স্ক্রিনে দৃশ্যমান করা
    }, 100);

    // পপআপ ৩ সেকেন্ড পর সরিয়ে ফেলুন
    setTimeout(() => {
        popup.style.top = '-100px'; // স্ক্রিনের বাইরে নিয়ে যাওয়া
        setTimeout(() => popup.remove(), 500); // DOM থেকে রিমুভ
    }, 3000);
})();
