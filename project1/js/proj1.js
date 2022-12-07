window.addEventListener('DOMContentLoaded',()=>{
  console.log('ready');

  let utilBtns = document.querySelectorAll('.utility-btn');
  let utilSubs = document.querySelectorAll('.util-sub-list');

  utilBtns.forEach((utilBtn,index)=>{
    utilBtn.addEventListener('click',()=>{

      utilSubs.forEach((utilSub)=>{
        utilSub.classList.remove('util-sub-on');
      });

      if(index == 3){
        utilBtn.classList.add('utility-btn-on');
        utilSubs[0].classList.add('util-sub-on');
      }else if(index == 4){
        utilBtn.classList.add('utility-btn-on');
        utilSubs[1].classList.add('util-sub-on');
      }
    });
    utilBtn.addEventListener('mouseleave',()=>{
      utilBtn.classList.remove('utility-btn-on');
    });
  });
  
  utilSubs.forEach((utilSub,index)=>{
    utilSub.addEventListener('mouseenter',()=>{
      if(index == 0){
        utilBtns[3].classList.add('utility-btn-on');
      }else if(index == 1){
        utilBtns[4].classList.add('utility-btn-on');
      }
    });
    utilSub.addEventListener('mouseleave',()=>{
      utilBtns.forEach((utilBtn)=>{
        utilBtn.classList.remove('utility-btn-on');
      });
      utilSub.classList.remove('util-sub-on');
    })
  });
  
  let topBtns = document.querySelectorAll('.gnb-top-btn');
  let midMenu = document.querySelectorAll('.gnb-mid-list');
  let midBtns = document.querySelectorAll('.gnb-mid-btn');
  let botMenu = document.querySelectorAll('.gnb-bot-list');
  
  topBtns.forEach((topBtn)=>{
    topBtn.addEventListener('mouseenter',()=>{
      midMenu.forEach((midmenu)=>{
        midmenu.classList.remove('gnb-mid-on');
      });

      if(topBtn.nextElementSibling){
        let thisMid = topBtn.nextElementSibling.firstElementChild;
        thisMid.classList.add('gnb-mid-on');
      }
    });
  });
  midBtns.forEach((midBtn)=>{
    midBtn.addEventListener('mouseenter',()=>{
      botMenu.forEach((botmenu)=>{
        botmenu.classList.remove('gnb-bot-on');
      });
      if(midBtn.nextElementSibling){
        let thisBot = midBtn.nextElementSibling;
        thisBot.classList.add('gnb-bot-on');
      }
    });
  });

  //exhibition slide
  let ExhUl = document.querySelector('.nationExh-list');
  let ExhLi = document.querySelectorAll('.nationExh-list li');
  let nowIndex = 0;
  let liLength = ExhLi.length;
  let prev = document.querySelector('.nExh-prev');
  let next = document.querySelector('.nExh-next');
  let liWidth = 315;
  let liMargin = 60;

  ExhUl.style.width = (liWidth + liMargin) * liLength + 'px' ;

  function ExhMove(num){
    ExhUl.style.left = - num * (liWidth + liMargin) + 'px';
    nowIndex = num;
  }

  prev.addEventListener('click',()=>{
    if(nowIndex !== 0){
      ExhMove(nowIndex - 1);
    }
  });
  next.addEventListener('click',()=>{
    if(nowIndex !== liLength - 1){
      ExhMove(nowIndex + 1);
    }
  });
})