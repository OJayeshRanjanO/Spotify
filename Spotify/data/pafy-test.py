
import pafy 
  
url = "https://www.youtube.com/watch?v=UOxkGD8qRB4"
video = pafy.new(url) 
mystream = video.audiostreams
print(mystream)
print(mystream[-1].url);
                  
# get best resolution regardless of format 
#best = video.getbestaudio()
#print(best.thumb)

#print(best.resolution, best.extension) 
  
# Download the video 
#best.download() 
