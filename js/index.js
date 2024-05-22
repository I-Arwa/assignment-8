var quotesArray=[

    {
      quote:'"  Two things are infinite: the universe and human stupidity;and Im not sure about the universe  "',
      author:'Albert Einstein.....<i class="fa-solid fa-feather-pointed"></i>'
    },
    {
      quote:'"  A room without books is like a body without a soul  "',
      author:'Marcus Tullius Cicero.....<i class="fa-solid fa-feather-pointed"></i>'
    },
    {
      quote:'"  Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind  "',
      author:'Bernard M. Baruch.....<i class="fa-solid fa-feather-pointed"></i>'
    },
    {
      quote:'"  If you tell the truth, you dont have to remember anything  "',
      author:'Mark Twain.....<i class="fa-solid fa-feather-pointed"></i>'
    },
    {
      quote:'"  I must have much more experience, I must learn still more, before I shall be ripe  "',
      author:'Vincent van Gogh.....<i class="fa-solid fa-feather-pointed"></i>'
    },
    {
      quote:'"  So many books, so little time  "',
      author:'Frank Zappa.....<i class="fa-solid fa-feather-pointed"></i>'
    },
  ];
  
  function displayData(){
   
    var num = Math.floor(Math.random() * quotesArray.length)
    document.getElementById('Quotes').innerHTML = quotesArray[num].quote;
    document.getElementById('Author').innerHTML = quotesArray[num].author;
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  