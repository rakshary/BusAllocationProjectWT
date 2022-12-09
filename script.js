const container1=document.querySelector('.container1');
const seats=document.querySelectorAll('.row .seat:not(.occupied');
const count=document.getElementById('count');
const total=document.getElementById('total');
let ticketPrice=+850;

populateUI();
function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    const seatsIndex=[...selectedSeats].map(function(seat){
        return[...seats].indexOf(seat);
    });
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    const selectedSeatsCount=selectedSeats.length;
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount*ticketPrice;
    total1.innerText=selectedSeatsCount*ticketPrice;
    // console.log(selectedSeatsCount);

}

function populateUI(){
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats!==null && selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1)
                seat.classList.add('selected');
        })
    }
}



container1.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
});

updateSelectedCount();