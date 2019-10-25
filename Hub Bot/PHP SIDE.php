<?
$Key = $_GET['Key'];

$Hashed = hash('sha256', $Key);
$HashedIP  = hash('sha256', $_SERVER['REMOTE_ADDR']);

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

if (in_array($Key,$KeyArray,TRUE)) {
    echo($Key);
} else {
    echo($HashedIP);
}

?>
