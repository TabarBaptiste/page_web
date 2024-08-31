<?php

$litre_essence = 1.822;
$reservoir = 45;
$plein_essence = $litre_essence * $reservoir;
echo "Le plein d'essence est de : ".$plein_essence."€\n";

$consomation_mixte_100km = 6.10;
$consomation_mixte = $consomation_mixte_100km / 100;

$autonomie = $reservoir / $consomation_mixte;
echo "L'autonomie total du véhicule est de : ".$autonomie." km\n";

$km_semaine = 160;
$temps_plein_par_semaine = $autonomie / $km_semaine;
$temps_plein_par_semaine = $temps_plein_par_semaine + ($temps_plein_par_semaine * 10/100);
echo "Le plein sera épuisé en : ".$temps_plein_par_semaine." semaine\n";
?>