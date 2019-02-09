<!DOCTYPE html>
<html>
    <head>
        <title> MTSS 2019 </title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
        <link href='https://fonts.googleapis.com/css?family=Droid+Serif|Open+Sans:400,700' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="fonts.css" />
        <link rel="stylesheet" href="timeline.css">
        <link rel="stylesheet" href="animacao.css" />

        <link rel="stylesheet" href="mobile.css" media="(max-width: 500px)" />
        
        <script src="script.js"></script>
    </head>
    <body>
        <?php include("data.php"); ?>
        <header id="header">
            <div id="hamburger">
                <a href="#" id="menu-link">
                    <span class="menu-icon">
                    <span class="menu-line menu-line-1"></span>
                    <span class="menu-line menu-line-2"></span>
                    <span class="menu-line menu-line-3"></span>
                    </span>
                </a>
            </div>
            <ul id="menu" class="">
                <?php foreach($menu as $id => $item): ?>
                    <div id="menu-animation-<?= $id ?>" class="menu-animation" ></div>
                    <li 
                        id="menu-item-<?= $id ?>"
                        class="menu-item <?= $item['em-breve'] ? 'em-breve' : '' ?>"
                        <?= $item['em-breve'] ? '' : "onclick=\"show('$id')\"" ?> 
                    >
                        [<span> <?= $item['titulo'] ?> </span>]
                    </li>
                <?php endforeach; ?>
            </ul>
        </header>
        <main>
            <div id="bg-image" style="<?=$bg_style?>"></div>
            <div id="inicial">
                <div id="logo">
                    <img id="logo-in" src="img/logo-round-in.png" />
                    <img id="logo-out" src="img/logo-round-out.png" />
                </div>
                <div id="slogan">
<span class="slogan"> Encontro de mulheres </span>
<span class="slogan"> de TI da Paraíba </span>
<span id="local" class="slogan pink"> NA CONDUCTOR </span>
<span id="data" class="slogan green"> EM MARÇO </span>
                </div>
            </div>
            <div id="content" class="">
                <?php foreach($menu as $id => $titulo): ?>
                    <div id="content-<?= $id ?>">
                        <div class="content">
                           <span class="close"><i class="far fa-window-close" onclick="hide('<?= $id ?>')"></i></span>
                            <?php include("$id.php") ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            <footer id="footer">
                <form>
                    <input type="text" name="email" placeholder="email" />
                    <button type="submit" class="green"> QUERO NOVIDADES 
                        SEM SPAM! </button>
                </form> 
                
                <div>
                    <a href="http://instagram.com/mulhertechsimsr">
                        <span> 
                            <i class="fab fa-instagram pink"></i> 
                            <span class="green">@mulher</span><span class="green">techsimsr</span> 
                        </span>
                    </a>
                </div> 
            </footer>
        </main>
        <script>
            load();
        </script>
    </body>
</html>