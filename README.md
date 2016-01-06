# stream-bot

## Usage
 - First install dependencies with `npm install`
 - Install [ffmpeg](https://www.ffmpeg.org) and make sure it's in your path
 - Copy `config.json.example` to `config.json` and fill in your Discord details
 - Copy `radio.json.example` to `radio.json` and modify it to your liking
 - Run with `node index.js`
<br/>
 - To add the bot to a channel, type `!join <channel>`
 - If you want to remove the bot from the channel, use `!leave`
 - All radio channels and audio tracks are listed with `!radio`
 - To listen to an entry in `radio.json` type ! and the name of the entry, for example `!noisefm` or `!sample` from radio.json.example

## Notes
 - The values in the url fields in radio.json **have to be in mp3 format and readable by ffmpeg** in order to work
 - If the bot isn't playing anything, try typing `ffplay <url>` in cmd/terminal to make sure it's readable by ffmpeg
