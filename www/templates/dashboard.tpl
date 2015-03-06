<div class="column-group">
  <div class="all-100">
    <h1>{{user.name}}</h1>
    <img src="{{user.photo}}">
    <p>{{user.text}}</p>
  <div class="all-100">
    <h2>Projects</h2>
    <ul>
      {{#projects}}
      <li><a href="#projects/{{id}}">{{name}}</a></li>
      {{/projects}}
    </ul>
  </div>
</div>
