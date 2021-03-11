let client_IP = "129.13.3.108";
let server_IP = "145.5.9.27";
let position_left = 310;
let next_position = 544;
let next_last_position = 778;

// position of IP_packet
var move_header = function() {
  document.getElementById('ip_packet').style.position = 'relative';
}
//position of the table appearing at the bottom
var table_downwards = function() {
  var table_1 = document.getElementById("routing_table");
  var table_2 = document.getElementById("arp_table");
  table_1.style.position = "absolute";
  table_1.style.top = "500px";
  table_2.style.position = "absolute";
  table_2.style.top = "500px";
}

// transmission when the "Start" button is clicked
var right = function() {
  position_left = position_left + 9;
  document.getElementById('ip_packet').style.left = position_left + 'px';

  if (position_left >= 540) {
    return;
  }
  setTimeout(right, 75);

  document.getElementById('MAC_Adresse_Sender').innerHTML = "MAC_Client";
  document.getElementById('MAC_Adresse_Empfänger').innerHTML = "MAC-R1-1";
}

// transmission when the "Next" button is clicked for first time
var next = function() {
  next_position = next_position + 9;
  document.getElementById('ip_packet').style.left = next_position + 'px';
  if (next_position >= 780) {
    return;
  }
  setTimeout(next, 75);
  document.getElementById('MAC_Adresse_Sender').innerHTML = "MAC-R1-2";
  document.getElementById('MAC_Adresse_Empfänger').innerHTML = "MAC-R2-1";
}

// when we click the "Next" button for "second" time then last transmission will run
var timesClicked = 0;
var next_last_transmission = function() {
  document.getElementById("button_1").addEventListener("click", function() {
    timesClicked++;
    if (timesClicked % 2 == 0) {} else {
      document.getElementById("dropDown_menu").disabled = true;
      document.getElementById("button").disabled = true;
      next_last();
      document.getElementById("routing_table").style.visibility = "hidden"
      document.getElementById("arp_table").style.visibility = "hidden"
      document.getElementById("button_1").style.visibility = "hidden";

      setTimeout(function() {
        document.getElementById("dropDown_menu").disabled = false;
      }, 2400);
      setTimeout(function() {
        document.getElementById("button").disabled = false;
      }, 2300);
    }
  });
}

// action peroformed when the "Next" nutton is pressed second time / last transmission
var next_last = function() {
  next_last_position = next_last_position + 9;
  document.getElementById("ip_packet").style.left = next_last_position + 'px';

  if (next_last_position >= 1016) {
    return;
  }
  setTimeout(next_last, 75);
  document.getElementById('MAC_Adresse_Sender').innerHTML = "MAC-R2-2";
  document.getElementById('MAC_Adresse_Empfänger').innerHTML = "MAC-Server";
}

// to disable the selected option from the dropDown_menu after clicking the "Start" button
var disable_option = function() {
  document.getElementById('dropDown_menu').disabled = true;
}

// to enable the option
var enable_option = function() {
  document.getElementById('dropDown_menu').disabled = false;
}

var enable_next_button_again = function() {
  document.getElementById('button_1').disabled = false;
}

var disable_next_button = function() {
  document.getElementById('button_1').disabled = true;
}

// IP_Address Information of client and server
var IP_information = function() {
  document.getElementById('sender_text').innerHTML = client_IP;
  document.getElementById('receiver_text').innerHTML = server_IP;
}

// Adding zero to the time if the number is less then 10
var addZero = function(num) {
  return num < 10 ? `0${num}` : num;
}

// calculation of the "local system time"
let today = new Date();
const hour = addZero(today.getHours());
const minutes = addZero(today.getMinutes());
const time = `${hour}:${minutes}`;

// inserting the row in the empty table
var update_upperTable = function() {
  var routing_table = document.getElementById("routing_table");
  var ARP_table = document.getElementById("arp_table");
  var row = routing_table.insertRow(1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  row = ARP_table.insertRow(1);
  var cell4 = row.insertCell(0);
  var cell5 = row.insertCell(1);
  var cell6 = row.insertCell(2);

  cell1.innerHTML = "145.5.9.27";
  cell2.innerHTML = "133.2.7";
  cell3.innerHTML = "2";

  cell4.innerHTML = "133.2.2.7";
  cell5.innerHTML = "MAC-R2-1";
  cell6.innerHTML = time;

  document.getElementById("table_1_caption").innerHTML = "Routing-Tabelle R1";
  document.getElementById("table_2_caption").innerHTML = "ARP-Tabelle R1";
}

// updating the row inserted previously
var update_lowerTable = function() {
  var table_1_update = document.getElementById("routing_table").rows[1].cells;
  var table_2_update = document.getElementById("arp_table").rows[1].cells;

  document.getElementById("table_1_caption").innerHTML = "Routing-Tabelle R2";
  document.getElementById("table_2_caption").innerHTML = "ARP-Tabelle R2";

  table_1_update[0].innerHTML = "145.5.9.2";
  table_1_update[1].innerHTML = "-";
  table_1_update[2].innerHTML = "2";

  table_2_update[0].innerHTML = "145.5.9.27";
  table_2_update[1].innerHTML = "MAC-Server";
  table_2_update[2].innerHTML = time;
}

// action performed when the "Start" nutton is clicked
var start = function() {
  document.getElementById('button').disabled = true;
  show_table();
  enable_next_button();
}

// on select the option from the dropDown_menu
var enableButton = function() {
  var selectelem = document.getElementById('dropDown_menu');
  selectelem.options[0].disabled = true; // disabling the empty option
  var btnelem = document.getElementById('button');
  btnelem.disabled = !selectelem.value;
}

// Delay to show the information in upper table
var show_table = function() {
  setTimeout(function() {
    update_upperTable();
  }, 2200);
}
// Delay to show the infromtion in lower table
var show_lower_tabel = function() {
  setTimeout(function() {
    table_downwards();
    update_lowerTable();
  }, 2500);
}
//delay to load the table
var show_lower_tabel_1 = function() {
  setTimeout(function() {
    hide_table();
  }, 2500);
}

//Delay to show the option
var show_enable_option_1 = function() {
  setTimeout(function() {
    enable_option();
  }, 2500);
}

//Delay to show the "Next" Button
var enable_next_button = function() {
  disable_next_button();
  setTimeout(function() {
    enable_next_button_again();
  }, 2200);
}

//delay to load the table
var show_tabel_load = function() {
  setTimeout(function() {
    hide_table();
  }, 2200);
}

// To show the ip_packet when "Start" button is clicked
var show_ip_packet = function() {
  setTimeout(function() {
    hide_ip_packet();
  }, 0);
}

// to show the next button when the function of "Start" button gets over
var show_next_button = function() {
  setTimeout(function() {
    hide_next_button();
  }, 0);
  right();
}

// to show the option after every transmission
var show_enable_option = function() {
  setTimeout(function() {
    enable_option();
  }, 2200);
}

// to make table visible on clicking the Start
var hide_table = function() {
  var x = document.getElementById("routing_table");
  var y = document.getElementById("arp_table");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

// to hide the IP_Packet when the page is loaded
var hide_ip_packet = function() {
  if (document.getElementById('ip_packet').style.display === "none") {
    document.getElementById('ip_packet').style.display = "block";
  } else {
    document.getElementById('ip_packet').style.display = "none";
  }
}

//to hide the "Next" button when the page is loaded
var hide_next_button = function() {
  if (document.getElementById('button_1').style.display === "none") {
    document.getElementById('button_1').style.display = "block";
  } else {
    document.getElementById('button_1').style.display = "none";
  }
}

// "Start" button function
var start_button = function() {
  show_next_button();
  show_ip_packet();
  enableButton();
  disable_option();
  show_tabel_load();
  show_enable_option();
  start();
  IP_information();
}

// "Next" button function
var next_button = function() {
  next();
  disable_option();
  enable_next_button();
  hide_table();
  show_enable_option();
  show_lower_tabel();
  show_lower_tabel_1();
  show_enable_option_1();
  next_last_transmission();
}
