import React from "react";
import Styled from 'styled-components';

const DivSobre = Styled.div`
    font-family: "Poppins",sans-serif;

    h1 {
        padding: 20px;
        font-size: 40px;
        color: black;
    }

    ul {
        display: flex;
        list-style: none;
        justify-content: space-around; 
    }

    ul p{
        padding: 20px;
        font-size:20px;
        font-weight: bold;
    }

    footer {
        background-color: #f2f2f2;
        position: absolute;
        width: 100%;
    }
`;

export default () =>{
    return(
        <DivSobre>
            <h1>Tudo Sobre a lojinha</h1>
            <ul>
                <li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie mattis tincidunt. Vestibulum mi metus, iaculis et dictum eget, dignissim id nisl. Donec sodales ante turpis, in imperdiet nibh ornare ut. Donec scelerisque placerat dui congue dignissim. Sed molestie in tortor nec lobortis. Etiam semper justo id nibh consectetur interdum. Proin scelerisque maximus felis, bibendum condimentum mi convallis eget. Etiam vel arcu elit.

Phasellus venenatis nec nisl vel faucibus. Suspendisse varius dapibus nulla nec vehicula. Nam gravida nulla quis placerat convallis. Aliquam dictum eu erat et eleifend. Integer purus tortor, iaculis in metus eu, tempor malesuada urna. Integer vitae libero malesuada, consequat massa sed, volutpat tortor. Donec eu blandit arcu. Nunc placerat pulvinar odio ut consectetur. Proin elementum interdum eros, vehicula interdum diam. Praesent ac elementum quam. Vivamus vehicula convallis turpis, ac rutrum ante dapibus nec.

Nulla fringilla sed libero ac venenatis. Donec suscipit eu quam eu aliquet. Morbi sodales feugiat ipsum, sit amet lacinia metus fringilla in. Sed ac eros eu nunc dapibus imperdiet quis at magna. Vivamus interdum diam quam, vel pulvinar eros euismod eget. Quisque ullamcorper felis sed metus placerat, eu commodo quam tristique. Sed faucibus congue est vel venenatis. Donec dignissim ac arcu quis interdum. Nullam non tortor ipsum. Nunc feugiat velit vulputate tincidunt suscipit. Donec eget magna nec arcu sollicitudin vehicula sit amet non ante. Mauris lobortis non magna nec laoreet.

Duis quis nibh eget ex ultricies molestie. Maecenas in magna vel risus ultricies dapibus. Vestibulum convallis aliquet aliquet. Nullam quis elit porttitor, facilisis mi sed, venenatis ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dapibus porta sem, eget mattis mauris molestie non. Morbi urna urna, finibus eu gravida sed, aliquet ac est. Donec dignissim leo eget lacus fermentum gravida. Duis ut lacinia leo, quis blandit tellus. Vivamus venenatis facilisis iaculis. Mauris sodales, lectus quis bibendum lobortis, augue ante hendrerit mi, vel vehicula felis purus ut nisl. Nullam non euismod tellus, sit amet laoreet leo. Quisque sodales iaculis sem, ut iaculis elit fermentum sed.

Sed id dictum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sapien ante, condimentum ut aliquet sit amet, sodales vel eros. Curabitur ut lacus varius, tincidunt nulla at, eleifend quam. Curabitur nibh sem, tristique vel pellentesque vel, blandit sit amet sem. Morbi ut est nec quam hendrerit elementum. Integer interdum turpis sit amet pulvinar hendrerit. Suspendisse tincidunt nisi velit, non laoreet erat posuere nec. Maecenas feugiat turpis turpis, ac sollicitudin elit mattis eu. Vivamus eu ipsum non metus volutpat fermentum ac vitae enim. Sed ante ipsum, laoreet non laoreet eget, finibus blandit sapien. Aliquam erat volutpat. Vestibulum fermentum neque a sollicitudin interdum.
                    </p>
                </li>
                <li>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie mattis tincidunt. Vestibulum mi metus, iaculis et dictum eget, dignissim id nisl. Donec sodales ante turpis, in imperdiet nibh ornare ut. Donec scelerisque placerat dui congue dignissim. Sed molestie in tortor nec lobortis. Etiam semper justo id nibh consectetur interdum. Proin scelerisque maximus felis, bibendum condimentum mi convallis eget. Etiam vel arcu elit.

Phasellus venenatis nec nisl vel faucibus. Suspendisse varius dapibus nulla nec vehicula. Nam gravida nulla quis placerat convallis. Aliquam dictum eu erat et eleifend. Integer purus tortor, iaculis in metus eu, tempor malesuada urna. Integer vitae libero malesuada, consequat massa sed, volutpat tortor. Donec eu blandit arcu. Nunc placerat pulvinar odio ut consectetur. Proin elementum interdum eros, vehicula interdum diam. Praesent ac elementum quam. Vivamus vehicula convallis turpis, ac rutrum ante dapibus nec.

Nulla fringilla sed libero ac venenatis. Donec suscipit eu quam eu aliquet. Morbi sodales feugiat ipsum, sit amet lacinia metus fringilla in. Sed ac eros eu nunc dapibus imperdiet quis at magna. Vivamus interdum diam quam, vel pulvinar eros euismod eget. Quisque ullamcorper felis sed metus placerat, eu commodo quam tristique. Sed faucibus congue est vel venenatis. Donec dignissim ac arcu quis interdum. Nullam non tortor ipsum. Nunc feugiat velit vulputate tincidunt suscipit. Donec eget magna nec arcu sollicitudin vehicula sit amet non ante. Mauris lobortis non magna nec laoreet.

Duis quis nibh eget ex ultricies molestie. Maecenas in magna vel risus ultricies dapibus. Vestibulum convallis aliquet aliquet. Nullam quis elit porttitor, facilisis mi sed, venenatis ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dapibus porta sem, eget mattis mauris molestie non. Morbi urna urna, finibus eu gravida sed, aliquet ac est. Donec dignissim leo eget lacus fermentum gravida. Duis ut lacinia leo, quis blandit tellus. Vivamus venenatis facilisis iaculis. Mauris sodales, lectus quis bibendum lobortis, augue ante hendrerit mi, vel vehicula felis purus ut nisl. Nullam non euismod tellus, sit amet laoreet leo. Quisque sodales iaculis sem, ut iaculis elit fermentum sed.

Sed id dictum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sapien ante, condimentum ut aliquet sit amet, sodales vel eros. Curabitur ut lacus varius, tincidunt nulla at, eleifend quam. Curabitur nibh sem, tristique vel pellentesque vel, blandit sit amet sem. Morbi ut est nec quam hendrerit elementum. Integer interdum turpis sit amet pulvinar hendrerit. Suspendisse tincidunt nisi velit, non laoreet erat posuere nec. Maecenas feugiat turpis turpis, ac sollicitudin elit mattis eu. Vivamus eu ipsum non metus volutpat fermentum ac vitae enim. Sed ante ipsum, laoreet non laoreet eget, finibus blandit sapien. Aliquam erat volutpat. Vestibulum fermentum neque a sollicitudin interdum.
                    </p>
                </li>
            </ul>
            <footer>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </footer>
        </DivSobre>
    );
};