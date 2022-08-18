fx_version "cerulean"

description "np-bingo"
author "Tadjh"
version '0.1.0'
repository 'https://github.com/tadjh/np-bingo'

lua54 'yes'

games {
  "gta5",
  "rdr3"
}

ui_page 'web/build/index.html'

client_script "client/dist/index.js"
server_script "server/server.lua"

files {
  'web/build/index.html',
}