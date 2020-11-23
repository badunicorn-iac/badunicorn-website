var egg = new Egg();
    egg.addCode("u,n,i,c,o,r,n", function() {
      jQuery('#cutyou').fadeIn(1000, function() {
        window.setTimeout(function() { jQuery('#cutyou').hide(); }, 5000);
      });
      jQuery('#youtube').fadeOut(1000, function() {
        window.setTimeout(function() { jQuery('#youtube').hide(); }, 5000);
      });
    }, "unicorn");

    var egg2 = new Egg();
    egg.addCode("s,e,s,a,m", function() {
        jQuery('#youtube').fadeOut(1, function() {
            window.location.href = "https://lab.badunicorn.net";
          });
        }, "sesam");

    var egg2 = new Egg();
    egg.addCode("p,r,o,a,c,t", function() {
        jQuery('#youtube').fadeOut(1, function() {
            window.location.href = "https://proact.eu";
          });
        }, "proact");

        egg.addHook(function(){
            console.log("Hook called for: " + this.activeEgg.keys);
            console.log(this.activeEgg.metadata);
          });

    egg.listen();