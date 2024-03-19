let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let textAreacont = document.querySelector(".textArea-cont");
let modalCont = document.querySelector(".modal-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let mainContainer = document.querySelector(".main-container");
let toolboxColors = document.querySelectorAll(".color");
let addTaskFlag = false;
let removeTaskFlag = false;
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";
let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1];
let ticketsArr = [];

if (localStorage.getItem("tickets")) {
  ticketsArr = JSON.parse(localStorage.getItem("tickets"));
  ticketsArr.forEach(function (ticket) {
    createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketID);
  });
}
for(let i = 0; i < toolboxColors.length; i++) {
  toolboxColors[i].addEventListener('click', function() {
      let selectedToolBoxColor = toolboxColors[i].classList[0];
      let filteredTickets = ticketsArr.filter(function(ticket) {
          return selectedToolBoxColor === ticket.ticketColor
      })
      let allTickets = document.querySelectorAll('.ticket-cont');
      for(let i = 0; i< allTickets.length; i++) {
          allTickets[i].remove();
      }

      filteredTickets.forEach(function(filteredTicket) {
          createTicket(filteredTicket.ticketColor, filteredTicket.ticketTask, filteredTicket.ticketID);
      })
  })