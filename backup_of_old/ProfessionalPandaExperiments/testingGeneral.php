<?php 
  # echo print("Hello World!");
  # echo true + false;
  # echo $var;
  # echo "<script>var x = 10;console.log(x);</script>";
  /*$var = (int) "NO";
  var_dump($var);*/
  /*$arr = [1,2,3,4,5];
  $val = 15**4;
  $string = "TELETUBBIE This is a string $val \t \t TELETUBBIE";
  echo "<textarea>" . $string . "</textarea>";
  var_dump(1 == 2);*/
  //echo "DAMMIT, EVERYTHING WENT WRONG";

  /*$signal = "the lion has been compromised. i repeat, the lion has been compromised.";
  $signal =  str_split($signal);

  $rand_chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  for($i=0;$i<sizeof($signal);$i++) {
    if(mt_rand(0,10) < 5) {
      $rand_elem = round(mt_rand(0,sizeof($rand_chars)-1));
      array_splice($signal, $i, 0, $rand_chars[$rand_elem]);
    }
  }

  echo implode("",$signal);*/
  echo pathinfo("/images/Ginty/OldFamilyPhotos/IMG_0002.png", PATHINFO_BASENAME); //Prints IMG_0002.png
?>