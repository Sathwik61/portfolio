const ham =document.getElementById('ham')
const hamcontent =document.getElementById('dd')
const ic=document.getElementById('ic')
const bd=document.getElementById('bd')
const nav_linksr=document.getElementById('nav-linksr')

hamcontent.style.display='none';
document.body.style.overflow = 'auto'; 
ham.addEventListener('click',(e=>{
    e.preventDefault();
    if (hamcontent.style.display === 'none') {
        bd.style.filter = 'blur(5px)';
        ic.src = 'https://cdn-icons-png.flaticon.com/512/1828/1828778.png'
        hamcontent.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    } else {
        ic.src = 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'
        hamcontent.style.display = 'none';
        bd.style.filter = 'none'; 
        document.body.style.overflow = 'auto'; 
    }
}))
nav_linksr.addEventListener('click',(e)=>{
    
    if (hamcontent.style.display === 'none') {
        bd.style.filter = 'blur(5px)';
        ic.src = 'https://cdn-icons-png.flaticon.com/512/1828/1828778.png'
        hamcontent.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    } else {
        ic.src = 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'
        hamcontent.style.display = 'none';
        bd.style.filter = 'none'; 
        document.body.style.overflow = 'auto'; 
    }
})
document.addEventListener('click', (e) => {
    
    if (!ham.contains(e.target) && !hamcontent.contains(e.target)) {
        ic.src = 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'; 
        hamcontent.style.display = 'none'; 
        bd.style.filter = 'none'; 
        document.body.style.overflow = 'auto'; 
    }
  });