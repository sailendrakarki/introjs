 /**
     * [_ConditionCheck description]
     * @return {[type]} [description]
     */
    function _conditioncheck(){
      var userinfo = localStorage.getItem('USERID');
      var introguide = introJs();
      if (userinfo == 1001){
        _checkfeature(introguide);
       
      }else{
       _tourguide(introguide);
      }  
    }

    /**
     * [tourguide description]
     * @param  {[type]} introguide [description]
     * @return {[type]}            [description]
     */
    function _tourguide(introguide){   
        
     if(showonlylogin===1){
        introguide.start('loginsection');
      }elseif(showonlylogin===2){
        introguide.start();
      }
     
      introguide.oncomplete(function () {
        localStorage.setItem('USERID', 1001);
      });

      introguide.onexit(function () {
        localStorage.setItem('USERID', 1001);
      });
    }

    /**
     * [_checkfeatures description]
     * @return {[type]} [description]
     */
    function _checkfeature(introguide){
      if(setflag==1){
        introguide.setOptions({steps:aka}).start();
      }else{
        return 0;
      }
    }

   