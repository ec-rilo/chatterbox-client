// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="profile-pic">
          <%= username.charAt(0).toUpperCase() %>
        </div>
        <div class="information-container">
          <div class="user-info-container">
            <p><span class="room"><%= roomname %> <span class="username">@<%= username %></span></span></p>
          </div>
          <div class="text-container">
            <p><%= text %></p>
          </div>
        </div>
      </div>
    `)

};