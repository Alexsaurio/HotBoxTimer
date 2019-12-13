import React, { Component } from 'react'

import { Grid, ButtonGroup, Button } from '@material-ui/core';


class Reloj extends Component {
    constructor(props) {
        super(props);

        this.state = {
            M: this.props.time,
            S: 0,
            Style: 'Clock',
            pause: false
        };

        this.handleClickIniciar = this.handleClickIniciar.bind(this);
        this.handleClickReiniciar = this.handleClickReiniciar.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.pause) {
            const { M, S } = this.state;
            if (M === this.props.time / 2)
                this.setState({ Style: 'Clock Hurry' });
            else if (M === this.props.time / 5)
                this.setState({ Style: 'Clock Hurryx2' });

            if (S === 0 && M !== 0) {
                this.setState({ S: 60 });
                this.setState({ M: (this.state.M - 1) });
            }
            if (this.state.M === 0 && this.state.S === 0) {
                this.setState({ S: 0 });
                this.setState({ M: 0 });
                this.setState({ active: false });
            } else
                this.setState({ S: (this.state.S - 1) });
        }
    }

    handleClickIniciar(){
       this.setState({ pause: !this.state.pause });
    }

    handleClickReiniciar(){
       this.setState({ M: this.props.time});
       this.setState({ S: 0});
       this.setState({ pause: false });
       this.setState({ Style: 'Clock' })
    }



    render() {
        const { M, S, Style } = this.state;
        return (
            
            <Grid>
                <div className={Style}> {M}:{S}</div>
                <ButtonGroup color="secondary" aria-label="outlined primary button group">
                    <Button onClick={this.handleClickIniciar}>Iniciar</Button>
                    <Button onClick={this.handleClickReiniciar}>Reinciar</Button>
                </ButtonGroup>
            </Grid>
        );
    }
}

export default Reloj;