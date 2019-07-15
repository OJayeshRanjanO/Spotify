package end.less.music;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ViewController {

    @RequestMapping(value="/",method = RequestMethod.GET)
    public String index(){

        return "index";
    }
}
