import os
import sys
import json
import spotipy
import webbrowser
import spotipy.util as util
import json

#https://open.spotify.com/user/21a4ct5moi7xmebqcfyvs5p6q?si=53osoyLDQ2WxH7hAwOEW7Q

username  = sys.argv[1]
try:
	token = util.prompt_for_user_token(username)
except:
	os.remove(f".cache-{username}")
	token = util.prompt_for_user_token(username)
spotipyObject = spotipy.Spotify(auth=token)

lz_uri = 'spotify:artist:36QJpDe2go2KgaRleHCDTp'

results = spotipyObject.artist_top_tracks(lz_uri)
print(json.dumps(results,sort_keys=True, indent=4))
for track in results['tracks'][:10]:
	('track    : ' + track['name'])
	print('audio    : ' + track['preview_url'])
	print('cover art: ' + track['album']['images'][0]['url'])
	print()