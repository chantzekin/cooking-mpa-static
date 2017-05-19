<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title><%= htmlWebpackPlugin.options.title %></title>
  <% for (var i in htmlWebpackPlugin.options.cdn.css) { %>
    <link rel="stylesheet" href="<%= htmlWebpackPlugin.options.cdn.css[i] %>">
  <% } %>
</head>

<body>

  <div class="ui animated button js-show-modal" tabindex="0">
    <div class="visible content">Next</div>
    <div class="hidden content">
      <i class="right arrow icon"></i>
    </div>
  </div>

  <div class="ui basic modal foo-modal">
    <i class="close icon"></i>
    <div class="header">
      Archive Old Messages
    </div>
    <div class="image content">
      <div class="image">
        <i class="archive icon"></i>
      </div>
      <div class="description">
        <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
      </div>
    </div>
    <div class="actions">
      <div class="two fluid ui inverted buttons">
        <div class="ui cancel red basic inverted button">
          <i class="remove icon"></i> No
        </div>
        <div class="ui ok green basic inverted button">
          <i class="checkmark icon"></i> Yes
        </div>
      </div>
    </div>
  </div>

  <% for (var i in htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
  <% } %>
</body>

</html>
