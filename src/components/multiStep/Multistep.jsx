import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import "./multistep.css"
import { Link } from 'react-router-dom';

function StepOne() {
   // retrieve form context


  const toggleArrow = () => {
    const element = document.getElementById('setgendermale');
    const element2 = document.getElementById('setgenderfemale');

    if (element.classList.contains('active')) {
      element.classList.remove('active');
      element2.classList.add('active');
    } else {
      element.classList.add('active');
      element2.classList.remove('active');
    }
  };



  return (
    <div>
        
     <main className="flex-grow flex items-center justify-center bg-[#f8f8f8]">
        <div className="text-center">
         
          <h1 className= 'text-center text-[30px] mt-6'>I Am</h1>
          <div className="flex justify-center space-x-6 mt-4">
          <div className="col-xs-6 col-sm-6 text-center action-link active " id="setgendermale" onClick={toggleArrow}>
    <div className="center-block">
        <label className="label-gender">
            <h3 className="lbl font-bold text-[25px]">A Man</h3>
        </label>
    </div>
</div>

<div className="col-xs-6 col-sm-6 text-center action-link " onClick={toggleArrow} id="setgenderfemale">
    <div className="center-block">
        <label className="label-gender">
            <h3 className="lbl font-bold text-[25px]">A Woman</h3>
        </label>
    </div>
</div>
          </div>
         
        </div>
      </main>
      </div>
  );
}
function StepTwo() {


    const toggleSwitch = (event) => {
        const element =  event.currentTarget;
       
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        } else {
          element.classList.add('active');
        }
      };
  
  return (
    <div>
          <h1 className= 'text-center text-[30px] mt-10'>What are you looking for?</h1>

        <div className="flex justify-center gap-3 mt-2">
      
        <div className="grid grid-rows-3 grid-flow-col gap-2">
  
    <div>
      <div className="col-xs-6 col-sm-6 text-center action-link   bg-[url('https://picsum.photos/320/120')]" id="setgender1" onClick={toggleSwitch}>
    <div className="center-block" >
        <label className="label-gender">
            <h3 className="lbl text-[22px] font-bold">Relationship</h3>
        </label>
    </div>
</div>
    </div>
  
    <div>
        <div className="col-xs-6 col-sm-6 text-center action-link  bg-[url('https://picsum.photos/320/121')]"  id="setgender1" onClick={toggleSwitch}>
    <div className="center-block">
        <label className="label-gender">
            <h3 className="lbl text-[22px] font-bold">Dates</h3>
        </label>
    </div>
</div>
    </div>
    <div>
        <div className="col-xs-6 col-sm-6 text-center action-link  bg-[url('https://picsum.photos/320/122')]" id="setgender1"  onClick={toggleSwitch}>
    <div className="center-block">
        <label className="label-gender">
            <h3 className="lbl text-[22px] font-bold ">Enamel</h3>
        </label>
    </div>
</div>
    </div>
  </div>

  <div className="grid grid-rows-3 grid-flow-col gap-4">
  
    <div >
     <div className="col-xs-6 col-sm-6 text-center action-link  bg-[url('https://picsum.photos/321/120')]" id="setgender1"  onClick={toggleSwitch}>
    <div className="center-block">
        <label className="label-gender">
            <h3 className="lbl text-[22px] font-bold">Acquaintances</h3>
        </label>
    </div>
</div>
    </div>
  
    <div >
        <div className="col-xs-6 col-sm-6 text-center action-link  bg-[url('https://picsum.photos/321/121')]" id="setgender1"  onClick={toggleSwitch}>
    <div className="center-block">
        <label className="label-gender">
            <h3 className="lbl text-[22px] font-bold">Webcam</h3>
        </label>
    </div>
</div>
    </div>
    <div>
        <div className="col-xs-6 col-sm-6 text-center action-link  bg-[url('https://picsum.photos/319/120')]" id="setgender1"  onClick={toggleSwitch}>
    <div className="center-block">
        <label className="label-gender">
            <h3 className="lbl text-[22px] font-bold">Friendship</h3>
        </label>
    </div>
</div>
    </div>
  </div>
 
  </div>
</div>

     
  );
}

function StepThree() {

  
  return (
    <div>
          <h1 className= 'text-center text-[30px] mt-10'>Aussehen und Erscheinung</h1>

        <div className='flex flex-col items-center justify-center '>
            <div className="flex justify-center items-center gap-3 mt-2 "id="setgender2"> 
                <div className="center-block">

                <h3 className="lbl text-[30px] font-bold text-white ">Describe Yourself</h3>
              </div>
             
              </div>
              <div className='grid grid-cols-3 gap-x-10 gap-6 mt-10 mb-6'>
              <div className="col-xs-6 col-sm-4" _mstvisible="4">
										<div class="form-group select flex flex-col gap-2 " _mstvisible="5"><label class="control-label big font-bold" for="height" _msttexthash="45877" _msthash="37" _mstvisible="6">Size</label><select name="height" class="form-control valid" _mstvisible="6" aria-invalid="false"><option value="" _msttexthash="412880" _msthash="38" _mstvisible="7">--- please select ---</option>
<option value="< 150" _msttexthash="54158" _msthash="39" _mstvisible="7">&lt; 150 cm</option>
<option value="150" _msttexthash="44044" _msthash="40" _mstvisible="7">150 cm</option>
<option value="151" _msttexthash="44161" _msthash="41" _mstvisible="7">151 cm</option>
<option value="152" _msttexthash="44278" _msthash="42" _mstvisible="7">152 cm</option>
<option value="153" _msttexthash="44395" _msthash="43" _mstvisible="7">153 cm</option>
<option value="154" _msttexthash="44512" _msthash="44" _mstvisible="7">154 cm</option>
<option value="155" _msttexthash="44629" _msthash="45" _mstvisible="7">155 cm</option>
<option value="156" _msttexthash="44746" _msthash="46" _mstvisible="7">156 cm</option>
<option value="157" _msttexthash="44863" _msthash="47" _mstvisible="7">157 cm</option>
<option value="158" _msttexthash="44980" _msthash="48" _mstvisible="7">158 cm</option>
<option value="159" _msttexthash="45097" _msthash="49" _mstvisible="7">159 cm</option>
<option value="160" _msttexthash="44148" _msthash="50" _mstvisible="7">160 cm</option>
<option value="161" _msttexthash="44265" _msthash="51" _mstvisible="7">161 cm</option>
<option value="162" _msttexthash="44382" _msthash="52" _mstvisible="7">162 cm</option>
<option value="163" _msttexthash="44499" _msthash="53" _mstvisible="7">163 cm</option>
<option value="164" _msttexthash="44616" _msthash="54" _mstvisible="7">164 cm</option>
<option value="165" _msttexthash="44733" _msthash="55" _mstvisible="7">165 cm</option>
<option value="166" _msttexthash="44850" _msthash="56" _mstvisible="7">166 cm</option>
<option value="167" _msttexthash="44967" _msthash="57" _mstvisible="7">167 cm</option>
<option value="168" _msttexthash="45084" _msthash="58" _mstvisible="7">168 cm</option>
<option value="169" _msttexthash="45201" _msthash="59" _mstvisible="7">169 cm</option>
<option value="170" _msttexthash="44252" _msthash="60" _mstvisible="7">170 cm</option>
<option value="171" _msttexthash="44369" _msthash="61" _mstvisible="7">171 cm</option>
<option value="172" _msttexthash="44486" _msthash="62" _mstvisible="7">172 cm</option>
<option value="173" _msttexthash="44603" _msthash="63" _mstvisible="7">173 cm</option>
<option value="174" _msttexthash="44720" _msthash="64" _mstvisible="7">174 cm</option>
<option value="175" _msttexthash="44837" _msthash="65" _mstvisible="7">175 cm</option>
<option value="176" _msttexthash="44954" _msthash="66" _mstvisible="7">176 cm</option>
<option value="177" _msttexthash="45071" _msthash="67" _mstvisible="7">177 cm</option>
<option value="178" _msttexthash="45188" _msthash="68" _mstvisible="7">178 cm</option>
<option value="179" _msttexthash="45305" _msthash="69" _mstvisible="7">179 cm</option>
<option value="180" _msttexthash="44356" _msthash="70" _mstvisible="7">180 cm</option>
<option value="181" _msttexthash="44473" _msthash="71" _mstvisible="7">181 cm</option>
<option value="182" _msttexthash="44590" _msthash="72" _mstvisible="7">182 cm</option>
<option value="183" _msttexthash="44707" _msthash="73" _mstvisible="7">183 cm</option>
<option value="184" _msttexthash="44824" _msthash="74" _mstvisible="7">184 cm</option>
<option value="185" _msttexthash="44941" _msthash="75" _mstvisible="7">185 cm</option>
<option value="186" _msttexthash="45058" _msthash="76" _mstvisible="7">186 cm</option>
<option value="187" _msttexthash="45175" _msthash="77" _mstvisible="7">187 cm</option>
<option value="188" _msttexthash="45292" _msthash="78" _mstvisible="7">188 cm</option>
<option value="189" _msttexthash="45409" _msthash="79" _mstvisible="7">189 cm</option>
<option value="190" _msttexthash="44460" _msthash="80" _mstvisible="7">190 cm</option>
<option value="191" _msttexthash="44577" _msthash="81" _mstvisible="7">191 cm</option>
<option value="192" _msttexthash="44694" _msthash="82" _mstvisible="7">192 cm</option>
<option value="193" _msttexthash="44811" _msthash="83" _mstvisible="7">193 cm</option>
<option value="194" _msttexthash="44928" _msthash="84" _mstvisible="7">194 cm</option>
<option value="195" _msttexthash="45045" _msthash="85" _mstvisible="7">195 cm</option>
<option value="196" _msttexthash="45162" _msthash="86" _mstvisible="7">196 cm</option>
<option value="197" _msttexthash="45279" _msthash="87" _mstvisible="7">197 cm</option>
<option value="198" _msttexthash="45396" _msthash="88" _mstvisible="7">198 cm</option>
<option value="199" _msttexthash="45513" _msthash="89" _mstvisible="7">199 cm</option>
<option value="200" _msttexthash="43615" _msthash="90" _mstvisible="7">200 cm</option>
<option value="201" _msttexthash="43732" _msthash="91" _mstvisible="7">201 cm</option>
<option value="202" _msttexthash="43849" _msthash="92" _mstvisible="7">202 cm</option>
<option value="203" _msttexthash="43966" _msthash="93" _mstvisible="7">203 cm</option>
<option value="204" _msttexthash="44083" _msthash="94" _mstvisible="7">204 cm</option>
<option value="205" _msttexthash="44200" _msthash="95" _mstvisible="7">205 cm</option>
<option value="206" _msttexthash="44317" _msthash="96" _mstvisible="7">206 cm</option>
<option value="207" _msttexthash="44434" _msthash="97" _mstvisible="7">207 cm</option>
<option value="208" _msttexthash="44551" _msthash="98" _mstvisible="7">208 cm</option>
<option value="209" _msttexthash="44668" _msthash="99" _mstvisible="7">209 cm</option>
<option value="210" _msttexthash="43719" _msthash="100" _mstvisible="7">210 cm</option>
<option value="> 210" _msttexthash="53976" _msthash="101" _mstvisible="7">&gt; 210 cm</option></select></div>									</div>
<div class="col-xs-6 col-sm-4" _mstvisible="4">
										<div class="form-group select flex flex-col gap-2"flex flex-col gap-2 _mstvisible="5"><label class="control-label big font-bold" for="weight" _msttexthash="77064" _msthash="102" _mstvisible="6">Weight</label><select name="weight" class="form-control valid" _mstvisible="6" aria-invalid="false"><option value="" _msttexthash="412880" _msthash="103" _mstvisible="7">--- please select ---</option>
<option value="< 50" _msttexthash="45227" _msthash="104" _mstvisible="7">&lt; 50 kg</option>
<option value="50" _msttexthash="35724" _msthash="105" _mstvisible="7">50 kg</option>
<option value="51" _msttexthash="35828" _msthash="106" _mstvisible="7">51 kg</option>
<option value="52" _msttexthash="35932" _msthash="107" _mstvisible="7">52 kg</option>
<option value="53" _msttexthash="36036" _msthash="108" _mstvisible="7">53 kg</option>
<option value="54" _msttexthash="36140" _msthash="109" _mstvisible="7">54 kg</option>
<option value="55" _msttexthash="36244" _msthash="110" _mstvisible="7">55 kg</option>
<option value="56" _msttexthash="36348" _msthash="111" _mstvisible="7">56 kg</option>
<option value="57" _msttexthash="36452" _msthash="112" _mstvisible="7">57 kg</option>
<option value="58" _msttexthash="36556" _msthash="113" _mstvisible="7">58 kg</option>
<option value="59" _msttexthash="36660" _msthash="114" _mstvisible="7">59 kg</option>
<option value="60" _msttexthash="35815" _msthash="115" _mstvisible="7">60 kg</option>
<option value="61" _msttexthash="35919" _msthash="116" _mstvisible="7">61 kg</option>
<option value="62" _msttexthash="36023" _msthash="117" _mstvisible="7">62 kg</option>
<option value="63" _msttexthash="36127" _msthash="118" _mstvisible="7">63 kg</option>
<option value="64" _msttexthash="36231" _msthash="119" _mstvisible="7">64 kg</option>
<option value="65" _msttexthash="36335" _msthash="120" _mstvisible="7">65 kg</option>
<option value="66" _msttexthash="36439" _msthash="121" _mstvisible="7">66 kg</option>
<option value="67" _msttexthash="36543" _msthash="122" _mstvisible="7">67 kg</option>
<option value="68" _msttexthash="36647" _msthash="123" _mstvisible="7">68 kg</option>
<option value="69" _msttexthash="36751" _msthash="124" _mstvisible="7">69 kg</option>
<option value="70" _msttexthash="35906" _msthash="125" _mstvisible="7">70 kg</option>
<option value="71" _msttexthash="36010" _msthash="126" _mstvisible="7">71 kg</option>
<option value="72" _msttexthash="36114" _msthash="127" _mstvisible="7">72 kg</option>
<option value="73" _msttexthash="36218" _msthash="128" _mstvisible="7">73 kg</option>
<option value="74" _msttexthash="36322" _msthash="129" _mstvisible="7">74 kg</option>
<option value="75" _msttexthash="36426" _msthash="130" _mstvisible="7">75 kg</option>
<option value="76" _msttexthash="36530" _msthash="131" _mstvisible="7">76 kg</option>
<option value="77" _msttexthash="36634" _msthash="132" _mstvisible="7">77 kg</option>
<option value="78" _msttexthash="36738" _msthash="133" _mstvisible="7">78 kg</option>
<option value="79" _msttexthash="36842" _msthash="134" _mstvisible="7">79 kg</option>
<option value="80" _msttexthash="35997" _msthash="135" _mstvisible="7">80 kg</option>
<option value="81" _msttexthash="36101" _msthash="136" _mstvisible="7">81 kg</option>
<option value="82" _msttexthash="36205" _msthash="137" _mstvisible="7">82 kg</option>
<option value="83" _msttexthash="36309" _msthash="138" _mstvisible="7">83 kg</option>
<option value="84" _msttexthash="36413" _msthash="139" _mstvisible="7">84 kg</option>
<option value="85" _msttexthash="36517" _msthash="140" _mstvisible="7">85 kg</option>
<option value="86" _msttexthash="36621" _msthash="141" _mstvisible="7">86 kg</option>
<option value="87" _msttexthash="36725" _msthash="142" _mstvisible="7">87 kg</option>
<option value="88" _msttexthash="36829" _msthash="143" _mstvisible="7">88 kg</option>
<option value="89" _msttexthash="36933" _msthash="144" _mstvisible="7">89 kg</option>
<option value="90" _msttexthash="36088" _msthash="145" _mstvisible="7">90 kg</option>
<option value="91" _msttexthash="36192" _msthash="146" _mstvisible="7">91 kg</option>
<option value="92" _msttexthash="36296" _msthash="147" _mstvisible="7">92 kg</option>
<option value="93" _msttexthash="36400" _msthash="148" _mstvisible="7">93 kg</option>
<option value="94" _msttexthash="36504" _msthash="149" _mstvisible="7">94 kg</option>
<option value="95" _msttexthash="36608" _msthash="150" _mstvisible="7">95 kg</option>
<option value="96" _msttexthash="36712" _msthash="151" _mstvisible="7">96 kg</option>
<option value="97" _msttexthash="36816" _msthash="152" _mstvisible="7">97 kg</option>
<option value="98" _msttexthash="36920" _msthash="153" _mstvisible="7">98 kg</option>
<option value="99" _msttexthash="37024" _msthash="154" _mstvisible="7">99 kg</option>
<option value="100" _msttexthash="43706" _msthash="155" _mstvisible="7">100 kg</option>
<option value="101" _msttexthash="43823" _msthash="156" _mstvisible="7">101 kg</option>
<option value="102" _msttexthash="43940" _msthash="157" _mstvisible="7">102 kg</option>
<option value="103" _msttexthash="44057" _msthash="158" _mstvisible="7">103 kg</option>
<option value="104" _msttexthash="44174" _msthash="159" _mstvisible="7">104 kg</option>
<option value="105" _msttexthash="44291" _msthash="160" _mstvisible="7">105 kg</option>
<option value="106" _msttexthash="44408" _msthash="161" _mstvisible="7">106 kg</option>
<option value="107" _msttexthash="44525" _msthash="162" _mstvisible="7">107 kg</option>
<option value="108" _msttexthash="44642" _msthash="163" _mstvisible="7">108 kg</option>
<option value="109" _msttexthash="44759" _msthash="164" _mstvisible="7">109 kg</option>
<option value="110" _msttexthash="43810" _msthash="165" _mstvisible="7">110 kg</option>
<option value="111" _msttexthash="43927" _msthash="166" _mstvisible="7">111 kg</option>
<option value="112" _msttexthash="44044" _msthash="167" _mstvisible="7">112 kg</option>
<option value="113" _msttexthash="44161" _msthash="168" _mstvisible="7">113 kg</option>
<option value="114" _msttexthash="44278" _msthash="169" _mstvisible="7">114 kg</option>
<option value="115" _msttexthash="44395" _msthash="170" _mstvisible="7">115 kg</option>
<option value="116" _msttexthash="44512" _msthash="171" _mstvisible="7">116 kg</option>
<option value="117" _msttexthash="44629" _msthash="172" _mstvisible="7">117 kg</option>
<option value="118" _msttexthash="44746" _msthash="173" _mstvisible="7">118 kg</option>
<option value="119" _msttexthash="44863" _msthash="174" _mstvisible="7">119 kg</option>
<option value="120" _msttexthash="43914" _msthash="175" _mstvisible="7">120 kg</option>
<option value="> 120" _msttexthash="54197" _msthash="176" _mstvisible="7">&gt; 120 kg</option></select></div>									</div>
<div class="col-xs-6 col-sm-4" id="haircolor_female" _mstvisible="4">
<div class="form-group select flex flex-col gap-2"flex flex-col gap-2 _mstvisible="5"><label class="control-label big font-bold" for="hair_color" _msttexthash="135902" _msthash="190" _mstvisible="6">Hair color</label><select name="hair_color" class="form-control" _mstvisible="6"><option value="" _msttexthash="412880" _msthash="191" _mstvisible="7">--- please select ---</option>
<option value="blonde" _msttexthash="58825" _msthash="192" _mstvisible="7">Blond</option>
<option value="brown" _msttexthash="60151" _msthash="193" _mstvisible="7">Brown</option>
<option value="black" _msttexthash="97760" _msthash="194" _mstvisible="7">Black</option>
<option value="red" _msttexthash="32578" _msthash="195" _mstvisible="7">Red</option>
<option value="grey" _msttexthash="44876" _msthash="196" _mstvisible="7">Grey</option>
<option value="white" _msttexthash="59696" _msthash="197" _mstvisible="7">White</option>
<option value="light blonde" _msttexthash="132873" _msthash="198" _mstvisible="7">Blonde</option>
<option value="dark blonde" _msttexthash="179270" _msthash="199" _mstvisible="7">Dark Blonde</option>
<option value="auburn" _msttexthash="116545" _msthash="200" _mstvisible="7">Auburn</option>
<option value="light brown" _msttexthash="134667" _msthash="201" _mstvisible="7">Tan</option>
<option value="dark brown" _msttexthash="181298" _msthash="202" _mstvisible="7">Dark brown</option></select></div>									</div>
<div class="col-xs-6 col-sm-4" _mstvisible="4">
<div class="form-group select flex flex-col gap-2"flex flex-col gap-2 _mstvisible="5"><label class="control-label big font-bold" for="hair_length" _msttexthash="156533" _msthash="203" _mstvisible="6">Hair length</label><select name="hair_length" class="form-control" _mstvisible="6"><option value="" _msttexthash="412880" _msthash="204" _mstvisible="7">--- please select ---</option>
<option value="very long" _msttexthash="112957" _msthash="205" _mstvisible="7">Lengthy</option>
<option value="long" _msttexthash="43264" _msthash="206" _mstvisible="7">Long</option>
<option value="normal" _msttexthash="77870" _msthash="207" _mstvisible="7">Medium</option>
<option value="short" _msttexthash="48191" _msthash="208" _mstvisible="7">Short</option>
<option value="very short" _msttexthash="120068" _msthash="209" _mstvisible="7">Very short</option>
<option value="bald" _msttexthash="149786" _msthash="210" _mstvisible="7">no hair</option></select></div>									</div>             
<div class="col-xs-6 col-sm-4" id="eyecolor_female" _mstvisible="4">
										<div class="form-group select flex flex-col gap-2"flex flex-col gap-2 _mstvisible="5"><label class="control-label big font-bold" for="eye_color" _msttexthash="115778" _msthash="222" _mstvisible="6">Eye color</label><select name="eye_color" class="form-control" _mstvisible="6"><option value="" _msttexthash="412880" _msthash="223" _mstvisible="7">--- please select ---</option>
<option value="blue" _msttexthash="43797" _msthash="224" _mstvisible="7">Blue</option>
<option value="brown" _msttexthash="60151" _msthash="225" _mstvisible="7">Brown</option>
<option value="grey" _msttexthash="44876" _msthash="226" _mstvisible="7">Grey</option>
<option value="green" _msttexthash="62101" _msthash="227" _mstvisible="7">Green</option>
<option value="black" _msttexthash="97760" _msthash="228" _mstvisible="7">Black</option>
<option value="blue green" _msttexthash="138918" _msthash="229" _mstvisible="7">Teal</option>
<option value="grey blue" _msttexthash="113425" _msthash="230" _mstvisible="7">Grey-blue</option>
<option value="grey green" _msttexthash="139997" _msthash="231" _mstvisible="7">Grey-green</option>
<option value="green brown" _msttexthash="153036" _msthash="232" _mstvisible="7">Greenish brown</option></select></div>									</div>          
<div class="col-xs-6 col-sm-4" id="figure_female" _mstvisible="4">
										<div class="form-group select flex flex-col gap-2"flex flex-col gap-2 _mstvisible="5"><label class="control-label big font-bold" for="figure" _msttexthash="76609" _msthash="240" _mstvisible="6">Figure</label><select name="figure" class="form-control" _mstvisible="6"><option value="" _msttexthash="412880" _msthash="241" _mstvisible="7">--- please select ---</option>
<option value="muscular" _msttexthash="142623" _msthash="242" _mstvisible="7">Muscular</option>
<option value="athletic" _msttexthash="136487" _msthash="243" _mstvisible="7">Sporty</option>
<option value="slim" _msttexthash="93171" _msthash="244" _mstvisible="7">Slender</option>
<option value="average" _msttexthash="319852" _msthash="245" _mstvisible="7">Average</option>
<option value="extra pounds" _msttexthash="350350" _msthash="246" _mstvisible="7">A few extra kilos</option></select></div>									</div>            
             
              </div>



        </div>
</div>

     
  );
}


function StepFour() {

  
  return (
    <div>
          <h1 className= 'text-center text-[30px] mt-10'>Search radius</h1>

        <div className='flex flex-col items-center justify-center '>
            <div className="flex justify-center items-center gap-3 mt-2 "id="setgender3"> 
                <div className="center-block">

                <h3 className="lbl text-[28px] font-bold text-white ">In which region would you like to meet other members?</h3>
              </div>
             
              </div>
              <div className='grid grid-cols-1 mt-6 mb-6'>
              <div class="col-xs-6 col-sm-6" _mstvisible="4">
										<div class="form-group select flex flex-col items-center gap-2 " _mstvisible="5"><label class="control-label big font-bold" for="height" _msttexthash="45877" _msthash="37" _mstvisible="6">City</label>
                                        <select name="height" class="form-controls valid" _mstvisible="6" aria-invalid="false"><option value="" _msttexthash="412880" _msthash="38" _mstvisible="7">--- please select ---</option>
                                        <option value="Heidelberg">Heidelberg</option>
<option value="Münster">Münster</option>
<option value="Leipzig">Leipzig</option>
<option value="Dresden">Dresden</option>
<option value="Berlin">Berlin</option>
<option value="Frankfurt am Main">Frankfurt am Main</option>
<option value="Hamburg">Hamburg</option>
<option value="Freiburg im Breisgau">Freiburg im Breisgau</option>
<option value="Aachen">Aachen</option>
<option value="Stuttgart">Stuttgart</option>
</select></div>

</div>
</div>


        </div>
</div>

     
  );
}

function StepFive() {

    
    return (
      <div className='h-[650px]'>
            <h1 className= 'text-center text-[30px] mt-10'>Personal Information</h1>
  
          <div className='flex flex-col items-center justify-center '>
              <div className="flex justify-center items-center gap-3 mt-2 "id="setgender4"> 
                  <div className="center-block">
  
                  <h3 className="lbl text-[28px] font-bold text-white ">How old are you and are you in a relationship?</h3>
                </div>
               
                </div>
                <div className='grid grid-cols-2 gap-x-[100px] gap-6 mt-10 mb-6'>
                  <div className='flex justify-around gap-4'>
                      
                        <div class="form-group select flex flex-col gap-2 " _mstvisible="5"><label class="control-label big font-bold" for="height" _msttexthash="45877" _msthash="37" _mstvisible="6">Day</label>
                      <select name="height" class="forms-control valid" _mstvisible="6" aria-invalid="false">
                          <option value="" _msttexthash="412880" _msthash="38" _mstvisible="7">Day</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      </div>
                      
                      <div class="form-group select flex flex-col gap-2 " _mstvisible="5"><label class="control-label big font-bold" for="height" _msttexthash="45877" _msthash="37" _mstvisible="6">month</label>
                       <select name="height" class="forms-control valid" _mstvisible="6" aria-invalid="false">
                          <option value="" _msttexthash="412880" _msthash="38" _mstvisible="7">Month</option>
                      
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      </div>
                      
                      <div class="form-group select flex flex-col gap-2 " _mstvisible="5"><label class="control-label big font-bold" for="height" _msttexthash="45877" _msthash="37" _mstvisible="6">year</label>
                                              <select name="height" class="forms-control valid" _mstvisible="6" aria-invalid="false"><option value="" _msttexthash="412880" _msthash="38" _mstvisible="7">Year</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </select>
                      </div>
                  </div>


               
 <div class="form-group select flex flex-col gap-2 " _mstvisible="5"><label class="control-label big font-bold" for="height" _msttexthash="45877" _msthash="37" _mstvisible="6">relationship status</label>
    <select name="height" class="forms-control valid" _mstvisible="6" aria-invalid="false"><option value="" _msttexthash="412880" _msthash="38" _mstvisible="7">--- please select ---</option>
<option value="Single">Single</option>
  <option value="Married">Married</option>
  <option value="Leipzig">In a relationship</option>
  <option value="Dresden">Divorced</option>
  <option value="Berlin">Engaged</option>
  <option value="Frankfurt am Main">Widowed</option>
 
  </select></div>
  
  </div>



  
  </div>

  <div className="flex items-center  justify-center">
        <Link to="/finish"> <button  className="whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-12 px-16 py-2 mt-8 bg-green-500 text-white">
            CONTINUE
          </button>
          </Link> 
          </div>
  </div>
  
       
    );
  }


  function StepSix() {

    
    return (
      <div className='h-full'>
            <h1 className= 'text-center text-[30px] mt-10'>Almost Finished....</h1>
  
          <div className='flex flex-col items-center justify-center '>
              <div className="flex justify-center items-center gap-3 mt-2 "id="setgender5"> 
                  <div className="center-block">
  
                  <h3 className="lbl text-[28px] font-bold text-white ">Just a few more details and your profile is complete</h3>
                </div>
               
                </div>
                <div className='flex flex-col items-center justify-center gap-3 mt-6 '>
            
                <div class="col-xs-6 col-sm-6" _mstvisible="4">
                                          <div class="form-group select flex flex-col gap-2 " _mstvisible="5"><label class="control-label big font-bold" for="height" _msttexthash="45877" _msthash="37" _mstvisible="6">Email</label>
                                          <input type='text' placeholder='Enter Email' name="height" class="form-controld valid" _mstvisible="6" aria-invalid="false"/>
                                          
  </div>
  
  </div>
  <div className="col-xs-6 col-sm-6" _mstvisible="4">
                                          <div className="form-group select flex flex-col gap-2 " _mstvisible="5"><label class="control-label big font-bold" for="height" _msttexthash="45877" _msthash="37" _mstvisible="6">UserName</label>
                                         
  
                                          <input type='text' placeholder='Enter username' name="height" className="form-controld valid" _mstvisible="6" aria-invalid="false" />
                                          
                                         </div>
  
  </div>
  </div>
  
 
          </div>
          <div className="flex items-center  justify-center mb-[90px]">
         <button className="whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-12 px-16 py-2 mt-8 bg-green-500 text-white">
             Submit
           </button>
           </div>
  </div>
  
       
    );
  }

// Repeat for StepThree, StepFour, StepFive

function MultiStepForm() {
  const methods = useForm();
  const [step, setStep] = React.useState(1);
  const totalSteps = 6;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        {step === 4 && <StepFour />}
        {step === 5 && <StepFive />}
        {step === 6 && <StepSix />}

        

        {/* Include other steps similarly */}
     {step !== totalSteps && (  <div className="flex items-center  justify-center">
        <button onClick={nextStep} className="whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-12 px-16 py-2 mt-8 bg-green-500 text-white">
            CONTINUE
          </button>
          </div>)}
        {step === totalSteps && (
         <div className="flex items-center  justify-center">
         <button className="whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-12 px-16 py-2 mt-8 bg-green-500 text-white">
             Submit
           </button>
           </div>
        )}
      </form>
    </FormProvider>
  );
}

export {StepOne,StepTwo,StepThree,StepFour,StepFive,StepSix,MultiStepForm};
