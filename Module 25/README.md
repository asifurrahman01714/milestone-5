

𝗕𝗜𝗡𝗗 𝗖𝗔𝗟𝗟 𝗔𝗡𝗗 𝗔𝗣𝗣𝗟𝗬 𝗜𝗡 𝗝𝗔𝗩𝗔𝗦𝗖𝗥𝗜𝗣𝗧
Call, Apply, and Bind তিনটি বেশ গুরুত্বপূর্ন  JavaScript methods যেগুলো বিভিন্ন  JavaScript functions/methods  এর উপর প্রয়োগ করা হয়। 

আজকে আমি আলোচনা করবো জাভাস্ক্রিপ্ট অবজেক্ট এর আমরা কিভাবে Call, Apply, and Bind এপলাই করতে পারি। মোটামুটি ইন্টারভিউ এর জন্যে খুবই গুরুত্বপূর্ন  একটি প্রশ্ন হলো "Call, Apply, and Bind বলতে  কি বুঝো ?"। তো চলুন শুরু করা যাক -

𝗢𝗯𝗷𝗲𝗰𝘁 : আমি ধরেই নিচ্ছি আমরা সবাই অবজেক্ট সম্পর্কে ধারণা রাখি এবং লিখতেও পারি। যারা নতুন তারা সার্চ করে দেখতে পারেন। 

𝐒𝐢𝐦𝐩𝐥𝐞 𝐉𝐒 𝐎𝐛𝐣𝐞𝐜𝐭 𝐌𝐨𝐝𝐞𝐥 :
```bash
const objectName = {
    1st key: "value",
    2nd key: "value"
}
```


𝗠𝗲𝘁𝗵𝗼𝗱 :মেথড হলো জাভাস্ক্রিপ্ট অবজেক্ট এর মধ্যে ব্যবহার করা কোনো ফাঙ্কশন। যেমন -
```bash
const person = {
    firstName: 'Asif Ur',
    lastName: 'Rahman',
    getFullName: function() { // this is called method
        return this.firstName + ' ' + this.lastName;
    },
}
```


এখানে 𝗴𝗲𝘁𝗙𝘂𝗹𝗹𝗡𝗮𝗺𝗲 হলো "person" জাভাস্ক্রিপ্ট অবজেক্ট এর একটি Method .

𝐂𝐨𝐦𝐦𝐨𝐧 𝐓𝐞𝐫𝐦𝐬 𝐚𝐦𝐨𝐧𝐠 𝐂𝐚𝐥𝐥, 𝐀𝐩𝐩𝐥𝐲, 𝐚𝐧𝐝 𝐁𝐢𝐧𝐝 𝐌𝐞𝐭𝐡𝐨𝐝𝐬  :
এই তিনটি মেথড এর মধ্যে সাধারণ যে বিষয়টি তা হলো - এক্ষেত্রে এই তিনটি মেথড যে অবজেক্ট এর  উপর এপলাই করা হয় শুধু তার মানের পরিবর্তন হয় কিন্তু  মূল অবজেক্ট এর কোনো পরিবর্তন হয় না। 

𝐛𝐢𝐧𝐝() : bind() হলো একটি অবজেক্ট এর মেথড কে নিয়ে যেয়ে অন্য আরেকটি অবজেক্ট এর উপর এপলাই করা। 
মনে করেন কালকে আপনার ইংলিশ পরীক্ষা । কিন্তু ইংলিশ বইটি  আপনার কাছে নাই। কিন্তু গত বছর পরীক্ষা দেওয়া  আপনার এক সিনিয়র ভাই এর কাছে আছে বইটি। তাই আপনি আপনার সেই ভাই এর বাড়িতে গেলেন। আর ইংলিশ বই টি নিয়ে এসে পরে পরের দিন এক্সাম দিলেন। 
এই যে আপনার কাছে একটি জিনিস নাই। কিন্তু আরেকজনের কাছ  ধার করে এনে নিজের কাজে লাগলেন , bind() মূলত  এভাবেই কাজ করে। 
যেমন -
ধরি আপনার কাছে একটি অবজেক্ট আছে 𝐧𝐨𝐫𝐦𝐚𝐥𝐏𝐞𝐫𝐬𝐨𝐧  নাম এ। এবং 𝐜𝐡𝐚𝐫𝐠𝐞𝐒𝐚𝐥𝐚𝐫𝐲 এই অবজেক্ট এর একটি মেথড/ফাঙ্কশন । এই মেথড এর কাজ হলো আপনি যখন এই মেথড টাকে amount, tips আর  tax এর ভ্যালু দিয়ে কল করবেন, তখন  আপনার স্যালারি থেকে ওই পরিমান 𝗮𝗺𝗼𝘂𝗻𝘁, 𝘁𝗶𝗽𝘀 আর  𝐭𝐚𝐱 এর ভ্যালু কেটে নিয়ে বর্তমান স্যালারি রিটার্ন করবে। যেমন ধরেন আপনার স্যালারি হচ্ছে ১২০০০ টাকা। এখন আপনার কাছ থেকে amount এর জন্যে ৫০০ টাকা , tips এর জন্যে ৫০০ টাকা  আর  tax এর এর জন্যে ৫০০ টাকা কেটে নিলো। তাহলে আপনার টোটাল স্যালারি থাকবে ১২০০০ - (৫০০+৫০০+৫০০)=১১৫০০ টাকা। যেমন -

```bash
const normalPerson = {
    name: 'John',
    salary: 1200,
    chargeSalary: function (amount, tips, tax){
        return this.salary = this.salary - amount - tips - tax; 
    }
}
```

const chargeNormalPerson = normalPerson.chargeSalary(500,500,500);
console.log(chargeNormalPerson); // result :11500
or 
console.log(normalPerson.salary);// result :11500

এখন ধরেন আপনার কাছে আরো  একটি অবজেক্ট আছে 𝗵𝗲𝗿𝗼𝗣𝗲𝗿𝘀𝗼𝗻 নাম এ।  chargeSalary নাম এ কোনো মেথড নাই। 

```bash
const heroPerson ={
    name: 'Hero',
    salary: 5000
}

```

এখন এই chargeSalary   মেথড টি  যদি bind()এর মাদ্ধমে  আপনি আপনার আরেকটি অবজেক্ট heroPerson এর উপর এপলাই করতে চান তাহলে সেক্ষেত্রে নিম্নোক্ত পদ্ধতি ব্যবহার করতে হবে। 

const heroChargeSalary = normalPerson.chargeSalary.bind(heroPerson);
// It will give a function named heroChargeSalary. So we have to call it to use.
```bash
heroChargeSalary(300,100,100);
console.log(heroPerson.salary)// result :4500
```


𝐜𝐚𝐥𝐥() : call() হলো অন্য একটি অবজেক্ট এর  মেথড/ফাঙ্কশন  কে ডাইরেক্টলি ব্যবহার করা। যেমন আপনি যদি ইংলিশ বইটি আপনার সিনিয়র ভাই এর কাছ থেকে ধার করে না এনে তার বাড়িতে যেয়ে পড়ে পরীক্ষা দেন তাহলে এই পদ্ধতিকে বলা হয় call()। এক্ষেত্রে এটি কোনো ফাঙ্কশন রিটার্ন করেনা। ডাইরেক্টলি আপনি এটি ব্যবহার করতে পারবেন। সেক্ষেত্রে আপনি প্যারামিটার গুলো  কমা এর মাদ্ধমে সেট করে দিতে পারবেন। যেমন -
```bash
normalPerson.chargeSalary.call (heroPerson, 300,100,100);
console.log(heroPerson.salary);// result :4500
```



𝐚𝐩𝐩𝐥𝐲 (): apply () মেথড টি call () মেথড এর মতোই। শুধুমাত্র এখানে প্যারামিটার গুলোকে একটি array হিসেবে ইনপুট করতে হয়। যেমন-

```bash
normalPerson.chargeSalary.apply (heroPerson, [300,100,100]);
console.log(heroPerson.salary);// result :4500

```

Asif Ur Rahman   
Technical Course Writer At Programming Hero















