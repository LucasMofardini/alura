import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Titulo(props) {
    const Tag = props.tag || 'h1';

    return (
        <>
            <div>
                <Tag>{props.children}</Tag>

            </div>
            <style jsx>{`
                ${Tag}{
                    color:${appConfig.theme.colors.neutrals['000']};
                    font-size:24px;
                    font-weight:600;
                }
            `}
            </style>
        </>
    );
}

export default function PaginaInicial() {


    const [username, setUsername] = useState('');
    const roteamento = useRouter();


    useEffect(() => {
        if (username) {
            document.title = username;
        } else {
            document.title = 'Discord - Vagabond';

        }
    });

    return (

        <>

            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary['500'],
                    backgroundImage: 'url(https://i.pinimg.com/originals/bd/8d/b6/bd8db6e6d336033e654188d56812e779.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    id="box-index"
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        onSubmit={(event) => {
                            event.preventDefault();
                            roteamento.push(`chat?username=${username}`);
                        }}
                        as="form"
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Boas vindas de volta!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>


                        <TextField
                            //Quando o usuario digitar qualquer caractere
                            onChange={(event) => {
                                // Vai pegar o que ele digitou e colocar setar o username,
                                // que vai trocar a foto do github e o nome em baixo
                                setUsername(event.target.value);


                                console.log(username.length);

                            }}
                            value={username}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary.black,
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}

                    <Box
                        id="box-git"
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',

                        }}
                    >

                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}

                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                        <Button
                            href={`https://github.com/${username}`}
                            label={
                                `${username}`
                            }
                            iconName="github"
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary.black,
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[500],
                            }}
                            size='sm'
                            styleSheet={{
                                marginTop: '20px',
                                marginLeft: '20px',
                                marginRight: '20px',
                                fontSize: '30px',
                                userSelect: 'none'
                            }}

                        />
                    </Box>
                    {/* Photo Area */}
                </Box>


            </Box>
        </>
    );
}