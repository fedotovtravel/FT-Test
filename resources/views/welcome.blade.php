<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Laravel</title>
</head>
<body>
<div id="app">
  <app/>
</div>
<script src="{{ mix('js/main.js') }}"></script>
</body>
</html>