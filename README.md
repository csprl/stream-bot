# stream-bot
**Development on this bot was stopped long ago and it most likely doesn't work anymore. Take a look at [CoreBot](https://github.com/casperlofgren/CoreBot) which has similar features but is being (somewhat) actively developed.**

## Usage
 - First install dependencies with `npm install`
 - Install [ffmpeg](https://www.ffmpeg.org) and make sure it's in your path
 - Copy `config.json.example` to `config.json` and fill in your Discord, Spotify and SoundCloud details
 - Copy `radio.json.example` to `radio.json` and modify it to your liking
 - Run with `node index.js`
 - To add the bot to a channel, type `!join <channel>`
 - To stop streaming or playing, simply type `!stop`
 - If you want to remove the bot from the channel, use `!leave`
 - All radio channels and audio tracks are listed with `!radio`
 - To listen to an entry in `radio.json` type ! and the name of the entry, for example `!noisefm` or `!sample` from radio.json.example
 - Use `!spotify <spotify track uri>` to play to a Spotify song
 - Use `!soundcloud <soundcloud link>` to play a song from SoundCloud

## Notes
 - The values in the url fields in radio.json **have to be in mp3 format and readable by ffmpeg** in order to work
 - If the bot isn't playing anything, try typing `ffplay <url>` in cmd/terminal to make sure it's readable by ffmpeg
 - You can copy the track URI by right-clicking on a song in Spotify
 - SoundCloud links can not be a playlist
