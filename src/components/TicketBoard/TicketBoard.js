import React from 'react'

const TicketBoard = ({ tickets }) => {
  return (
    <div>
      <center><h1>Tickets</h1></center>
      {tickets.map((ticket) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{ticket.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{ticket.body}</h6>
            <p class="card-text">{ticket.id}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default TicketBoard
