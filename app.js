const products=[
 ['Трайфл «Фисташка»','trifle','Фаворит коллекции. Точный состав уточняется.','dessert.jpg','ФАВОРИТ'],
 ['Трайфл «Сникерс»','trifle','Фаворит коллекции. Точный состав уточняется.','chocolate.jpg','ФАВОРИТ'],
 ['Тирамису','classic','Классический десерт из ассортимента студии.','dessert.jpg','КЛАССИКА'],
 ['Три шоколада','classic','Десерт из коллекции DANA. Состав уточняется.','chocolate.jpg','КЛАССИКА'],
 ['Чизкейк','classic','Творожная классика для сладкого момента.','hero.jpg','КЛАССИКА'],
 ['Медовик','classic','Знакомый любимый десерт. Детали уточняются.','dessert.jpg','КЛАССИКА'],
 ['Cookies · вариант 1','cookies','Один из трёх видов. Название и состав уточняются.','cookies.jpg','ОБРАЗЕЦ'],
 ['Cookies · вариант 2','cookies','Один из трёх видов. Название и состав уточняются.','cookies.jpg','ОБРАЗЕЦ'],
 ['Cookies · вариант 3','cookies','Один из трёх видов. Название и состав уточняются.','cookies.jpg','ОБРАЗЕЦ']
];
const grid=document.querySelector('#products');
function render(filter='all'){grid.replaceChildren();products.filter(p=>filter==='all'||p[1]===filter).forEach(([name,category,description,image,tag])=>{const card=document.createElement('article');card.className='card';const picture=document.createElement('div');picture.className='image';const img=document.createElement('img');img.src="hero.jpg";img.alt=`Иллюстративное фото, не фотография изделия «${name}»`;img.width=600;img.height=700;img.loading='lazy';picture.append(img);const badge=document.createElement('span');badge.className='tag';badge.textContent=tag;picture.append(badge);const title=document.createElement('h3');title.textContent=name;const text=document.createElement('p');text.textContent=description;const meta=document.createElement('p');meta.textContent='Вес и цена — уточняются';const button=document.createElement('button');button.className='order';button.dataset.name=name;button.setAttribute('aria-label',`Подготовить запрос: ${name}`);button.textContent='Хочу попробовать ↗';card.append(picture,title,text,meta,button);grid.append(card)});document.querySelector('#count').textContent=`Показано десертов: ${grid.children.length}`;}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render(button.dataset.filter)}));
const dialog=document.querySelector('#request'), message=document.querySelector('#message');
document.addEventListener('click',event=>{const button=event.target.closest('.order');if(!button)return;message.value=`Здравствуйте, Дана! Хочу обсудить ${button.dataset.name||'заказ десертов'}. Подскажите, пожалуйста, состав, стоимость и доступную дату.`;updateWhatsApp();document.querySelector('#status').textContent='';dialog.showModal()});
document.querySelector('#copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(message.value);document.querySelector('#status').textContent='Текст скопирован. Ничего не отправлено.'}catch{message.focus();message.select();document.querySelector('#status').textContent='Выделенный текст можно скопировать вручную.'}});
render();


function updateWhatsApp(){document.querySelector('#whatsapp').href='https://wa.me/79993099646?text='+encodeURIComponent(message.value)};message.addEventListener('input',updateWhatsApp);

if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll(".section").forEach(section=>{section.classList.add("reveal");observer.observe(section)})}
