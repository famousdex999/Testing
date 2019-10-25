<?php
$GetKey = $_GET[''];
$GetId = $_GET[''];
$GetIP = $_SERVER['REMOTE_ADDR'];

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

$IdArray = array('1103746828');

$IpArray = array('86.63.41.83');


$KeyArray = array('eqRA-gIeS-sxUz-Xv1G','iMMj-r9Yi-Bb9w-RajN',
'yQGD-7ojs-XHTR-J7Lg','CTwd-5XYa-ezrb-u2jo',
'zCXr-dUVz-qXdy-9rIx','kGFP-N22X-avJD-tnpO',
'9YwG-aPpb-r0L9-zRu8','Y99y-0owu-aeuH-72ke',
'K0G2-fhiM-QCIw-4Cos','yGLd-Qv3H-9WqI-JSkM',
'ZM2b-BsFH-3Bc8-wj4Y','jq1E-oyKt-we7s-P81a',
'f0Wp-Mfgb-WgYj-KhAi','2VWd-t3zJ-Og3b-OFs1',
'rUsh-MX1Y-IIbg-IMAJ','CcS3-lNEa-yWWu-6mtc',
'Mqx0-XTAb-DAfG-xBLp','BpGz-jxJl-pS0f-VSll',
'pj6y-5B8O-TIVi-7rSp','VPg4-EQ5K-Ck7L-mugA',
'v9TN-N4cE-4khS-nqn3','NKFE-1E1E-pTTE-Vo17',
'rgRC-4H1R-LOcr-UHyH','IqHS-EWAh-FKDh-3ZaR');

$hashed = hash('sha512', $GetKey);
$hashedid = hash('sha512', $GetId);
$hashedip = hash('sha512', $GetIP);

$hashedrandom = hash('sha512', generateRandomString());

if (in_array($GetKey,$KeyArray,TRUE)) if(in_array($GetId,$IdArray)) if(in_array($GetIP,$IpArray)) {
    echo($hashed); echo($hashedid); echo($hashedip); echp('͔');
} 
else 
{
	echo($hashedrandom);
}
?>