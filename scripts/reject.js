
const rejectChild = rejectSection.children; rejectSection.addEventListener('click',function(e){
   const interview = e.target.innerText;
   const parent = e.target.parentElement.parentElement.parentElement.parentElement;
   

   if(interview == 'INTERVIEW'){
    const cardChild = allCards.children;
   for(const child of cardChild){
      if(child.innerHTML==parent.innerHTML){
         const childStatus = child.childNodes[1].childNodes[5];
         childStatus.innerText='INTERVIEW';
      }
   }

   //
   const statusTarget = e.target.parentElement.parentElement.parentElement.children[2];
   statusTarget.innerText='INTERVIEW';
     const interviewElement = document.createElement('div');
   interviewElement.innerHTML=`${parent.innerHTML}`;
   interviewSection.appendChild(interviewElement);
      parent.remove();
       dashReject();
      countInter();
      countReject();
     
   }
   else{
      return;
   }
    
})





const rejectedBtn = document.getElementsByClassName('rejected');

for(const reject of rejectedBtn){
    reject.addEventListener('click', function(event){
    const statusTarget = event.target.parentElement.parentElement.parentElement.children[2];
   statusTarget.innerText='REJECTED';
   const rejectTarget=event.target.parentElement.parentElement.parentElement.parentElement.innerHTML;
   //
   const targetJobName = event.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerText;
   const interviewCld = interviewSection.children;
    for(const cld of interviewCld){
  const rejectJobName = cld.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText;
  if(targetJobName==rejectJobName){
   cld.remove();
   countInter();
  }

    }
   //

    const rejectChildren = rejectSection.children;

   for(const children of rejectChildren){

    if (children.innerHTML===rejectTarget ){
       return;
    }
   
   }
   
     const rejectElement = document.createElement('div');
   rejectElement.innerHTML=`${rejectTarget}`;
   rejectSection.appendChild(rejectElement);
   countReject();
   
  
})
}