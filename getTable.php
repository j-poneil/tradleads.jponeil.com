<!DOCTYPE html>
<html>
<head></head>
<body>

<?php
    // the info needed to connect to the MySQL db, which I obviously don't want to publish on github
    // gives access to the variables:
    // $serveraddress, $my_user, $my_password, $my_db
    include 'env.php';

    $whichTable = $_GET['q'];

    $con = mysqli_connect($serveraddress,$my_user,$my_password,$my_db);
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    
    // get table in desired sorted order to be used in echoing out below
    // later have this point to stored procedures
    switch($whichTable){
        case 'default':
            $sql = "SELECT * FROM `TABLE 1`";
            $result = mysqli_query($con,$sql);
            break;
        case 'default_rev':
            $sql = "SELECT * FROM `TABLE 1` ORDER BY `#` DESC";
            $result = mysqli_query($con,$sql);
            break;
        case 'pitches':
            $sql = "SELECT * FROM `TABLE 1` ORDER BY `pitches` DESC, `name` ASC";
            $result = mysqli_query($con,$sql);
            break;
        case 'pitches_rev':
            $sql = "SELECT * FROM `TABLE 1` ORDER BY `pitches` ASC, `name` ASC";
            $result = mysqli_query($con,$sql);
            break;
        case 'area':
            $sql = "SELECT * FROM `TABLE 1` ORDER BY `area` ASC, `name` ASC";
            $result = mysqli_query($con,$sql);
            break;
        case 'area_rev':
            $sql = "SELECT * FROM `TABLE 1` ORDER BY `area` DESC, `name` ASC";
            $result = mysqli_query($con,$sql);
            break;
        case 'difficulty':
            $sql = "SELECT * FROM `TABLE 1` ORDER BY `diff_sort` DESC, `pitches` ASC";
            $result = mysqli_query($con,$sql);
            break;
        case 'difficulty_rev':
            $sql = "SELECT * FROM `TABLE 1` ORDER BY `diff_sort` ASC, `pitches` DESC";
            $result = mysqli_query($con,$sql);
            break;
        case 'other':
            $sql = "SELECT * FROM `TABLE 1`";
            $result = mysqli_query($con,$sql);
            break;
        default:
            $sql = "SELECT * FROM `TABLE 1`";
            $result = mysqli_query($con,$sql);
            break;
    }


    // combine
    //  num, date, name/link
    //  difficulty, pitches, grade
    //  area
    //  partners
    //  notes

    // Table headers per size
    echo "
    <thead>
        <tr class='show-for-small-only'>
            <th colspan='4'>S - Summary</th>
        </tr>
        <tr class='show-for-medium-only'>
            <th colspan='4'>M - Summary</th>
        </tr>
        <tr class='show-for-large-only'>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Geology &amp; Area</th>
            <th>Notes</th>
        </tr>
        <tr class='show-for-xlarge-only hide-for-large-only hide-for-medium-only hide-for-small-only'>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Geology &amp; Area</th>
            <th>Notes</th>
        </tr>
    </thead>
    ";

    // Table data per size
    // Uncombined for xlarge / large
    // Somewhat combined for medium
    // Small screens get stacked table, so highly combined data before display
    echo "<tbody>";
    while($row = mysqli_fetch_array($result)){
            echo "
                <tr class='show-for-small-only'>
                    <td>" . $row['#'] . " - " . $row['date'] . " <a href='" . $row['link'] . "'>" . $row['name'] . "</a> " . $row['difficulty'] . " " . $row['pitches'] . "p G " . $row['grade'] . "</td>
                    <td>Rock: " . $row['rock'] . "</br>" . $row['area'] . "</td>
                    <td>With: " . $row['partner'] . "</td>
                    <td>
                        <details>
                            <summary>Notes</summary>
                            <p>" . $row['notes'] . "</p>
                        </details>
                    </td>
                </tr>
                ";
            echo "
                <tr class='show-for-medium-only'>
                    <td>" . $row['#'] . " - " . $row['date'] . " <a href='" . $row['link'] . "'>" . $row['name'] . "</a> " . $row['difficulty'] . " " . $row['pitches'] . "p G " . $row['grade'] . "</td>
                    <td>Rock: " . $row['rock'] . "</br>" . $row['area'] . "</td>
                    <td>With: " . $row['partner'] . "</td>
                    <td>
                        <details>
                            <summary>Notes</summary>
                            <p>" . $row['notes'] . "</p>
                        </details>
                    </td>
                </tr>
                ";
            echo "
                <tr class='show-for-large-only'>
                    <td class='wrapfix'>" . $row['#'] . "</td>
                    <td class='wrapfix'>" . $row['date'] . "</td>
                    <td class='wrapfix'><a href='" . $row['link'] . "'>" . $row['name'] . "</a></td>
                    <td class='wrapfix'>" . $row['difficulty'] . " " . $row['pitches'] . "p G " . $row['grade'] . "</td>
                    <td>Rock: " . $row['rock'] . "</br>" . $row['area'] . "</td>
                    <td>With: " . $row['partner'] . "
                        <details>
                            <summary>Notes</summary>
                            <p>" . $row['notes'] . "</p>
                        </details>
                    </td>
                </tr>
                ";
            echo "
                <tr class='show-for-xlarge-only hide-for-large-only hide-for-medium-only hide-for-small-only'>
                    <td class='wrapfix'>" . $row['#'] . "</td>
                    <td class='wrapfix'>" . $row['date'] . "</td>
                    <td class='wrapfix'><a href='" . $row['link'] . "'>" . $row['name'] . "</a></td>
                    <td class='wrapfix'>" . $row['difficulty'] . " " . $row['pitches'] . "p G " . $row['grade'] . "</td>
                    <td>Rock: " . $row['rock'] . "</br>" . $row['area'] . "</td>
                    <td><span class='with'>With</span>: " . $row['partner'] . "
                        <details>
                            <summary>Notes</summary>
                            <p>" . $row['notes'] . "</p>
                        </details>
                    </td>
                </tr>
                ";
    }
    echo "</tbody>";


    

    mysqli_close($con);
?>
</body>
</html>