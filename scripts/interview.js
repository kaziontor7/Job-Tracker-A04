const allCards = document.getElementById('allCards')
const interviewSection = document.getElementById('interviewSection');
const rejectSection = document.getElementById('rejectSection');
const dashCount = document.getElementById('dashCount');
const noJob = document.getElementById('noJob')


// no job
function noJobs(id){
   if(id.children.length==0){
      noJob.classList.remove('hidden')
   }
   else{
      noJob.classList.add('hidden')
   }
}

//count 
const allTotal = document.getElementById('allCount');
const interTotal = document.getElementById('interCount');
const rejectTotal = document.getElementById('rejectCount');
function countAll (){
   const allCount=allCards.children.length;
   //
   dashCount.innerText=allCount;
   allTotal.innerText=allCount;

}
countAll()

function countInter (){
   const interCount = interviewSection.children.length;
  
   interTotal.innerText=interCount;
  
}

function countReject (){
   const rejectCount = rejectSection.children.length;
   //
   rejectTotal.innerText=rejectCount;
}


 const allBtn = document.getElementById('allBtn')
   const interBtn = document.getElementById('interBtn')
   const rejectBtn = document.getElementById('rejectBtn')


function jobToggle(id){
  
  
   allBtn.classList.remove('bg-blue-500', 'text-white' )
   interBtn.classList.remove('bg-blue-500', 'text-white'  )
   rejectBtn.classList.remove('bg-blue-500', 'text-white'  )

   allBtn.classList.add('bg-white', 'text-[#64748B]' )
   interBtn.classList.add('bg-white', 'text-[#64748B]' )
   rejectBtn.classList.add('bg-white', 'text-[#64748B]' )

   const selected = document.getElementById(id);
   

   selected.classList.remove('bg-white', 'text-[#64748B]')
   selected.classList.add('bg-blue-500','text-white')



}
// dashboard 
function dashAll(){
   const allCount=allCards.children.length;
   dashCount.innerText=allCount;
   noJobs(allCards);
}

function dashInter(){
   const interCount=interviewSection.children.length;
   dashCount.innerText=interCount;
   noJobs(interviewSection);
}

function dashReject(){
   const rejectCount=rejectSection.children.length;
   dashCount.innerText=rejectCount;
   noJobs(rejectSection)
}

//

const interviewChild = interviewSection.children;
interviewSection.addEventListener('click',function(e){
   const reject = e.target.innerText;
   const parent = e.target.parentElement.parentElement.parentElement.parentElement;
   // delete from interview
   if (e.target.parentElement.parentElement.classList.contains('delete') || e.target.parentElement.classList.contains('delete') ){
        for(const cld of interviewChild){
          const cardChild = allCards.children;
         for(const child of cardChild){
      if(child.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText==cld.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText){
         console.log(true)
         const childStatus = child.childNodes[1].childNodes[5];
         childStatus.innerText='NOT APPLIED';
      }
   }
   //
         if (parent== cld || parent.parentElement == cld){
            cld.remove();
         }
       }
        dashInter()
        countInter()

       
   }


   //
   if(reject == 'REJECTED'){
      const cardChild = allCards.children;
   for(const child of cardChild){
      if(child.innerHTML==parent.innerHTML){
         const childStatus = child.childNodes[1].childNodes[5];
         childStatus.innerText='REJECTED';
      }
   }
       const statusTarget = e.target.parentElement.parentElement.parentElement.children[2];
   statusTarget.innerText='REJECTED';
     const rejectElement = document.createElement('div');
   rejectElement.innerHTML=`${parent.innerHTML}`;
   rejectSection.appendChild(rejectElement);
      parent.remove();
       dashInter();
      countInter();
      countReject();
     
   }
   else{
      return;
   }
   
})


//



const interviewBtn = document.getElementsByClassName('interview');

for(const interview of interviewBtn){
    interview.addEventListener('click', function(event){
    const statusTarget = event.target.parentElement.parentElement.parentElement.children[2];
   statusTarget.innerText='INTERVIEW';
   const interviewTarget=event.target.parentElement.parentElement.parentElement.parentElement.innerHTML;
   //
   const targetJobName = event.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerText;
   const rejectedCld = rejectSection.children;
    for(const cld of rejectedCld){
  const rejectJobName = cld.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText;
  if(targetJobName==rejectJobName){
   cld.remove();
   countReject();
  }

    }
   //
    const interviewChildren = interviewSection.children;
   for(const child of interviewChildren){
    if (child.innerHTML===interviewTarget ){
       return;
    }
   
   }
   
     const interviewElement = document.createElement('div');
   interviewElement.innerHTML=`${interviewTarget}`;
   interviewSection.appendChild(interviewElement);
   
   countInter(); 
  
})
}

document.getElementById('interBtn').addEventListener('click', function inter(){
   jobToggle('interBtn')
   allCards.classList.add('hidden');
   rejectSection.classList.add('hidden')
   interviewSection.classList.remove('hidden')
   
})


document.getElementById('rejectBtn').addEventListener('click', function reject(){
   jobToggle('rejectBtn')
   allCards.classList.add('hidden');
   rejectSection.classList.remove('hidden')
   interviewSection.classList.add('hidden')
})

document.getElementById('allBtn').addEventListener('click', function all(){  
   jobToggle('allBtn')
   rejectSection.classList.add('hidden')
   interviewSection.classList.add('hidden')
   allCards.classList.remove('hidden');
})

// Delete
const deleted = document.getElementsByClassName('delete');

for(const del of deleted){
   del.addEventListener('click',function(){
   const dele =  del.parentElement.parentElement.parentElement;
   const deleText = del.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerText;
   //
   const rejectedCld = rejectSection.children;
    for(const cld of rejectedCld){
  const rejectJobName = cld.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText;
  if(deleText==rejectJobName){
   cld.remove();
   countReject();
  }

    }
//
const interviewCld = interviewSection.children;
    for(const cld of interviewCld){
  const interviewJobName = cld.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText;
  if(deleText==interviewJobName){
   cld.remove();
   countInter();
  }

    }

   //
    dele.remove();
    dashAll();
    countAll ();
   })
}







