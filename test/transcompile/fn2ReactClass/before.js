function bb(){
    return <div/>
}

()=>{
    return <div/>
}

()=><div/>

var cc = function ccc(){
    return <div/>
}

var a = function(){
    var state = this.state;
    const {aa,bb,cc} = this.props;
    return <div propa={aa} props={state} cc={cc} className="efg"></div>
}


cc.propTypes = {
    ccStr:React.PropsTypes.string
}

cc.defaultProps = {
    ccStr:'cc'
}

a.propTypes = {
    aStr:React.PropsTypes.string
}

a.defaultProps = {
    aStr:'a'
}

function eee(){
    return 'a';
}

class ReactComponent extends React.Component {
  /**
   * @ignore
   */
  render(){
    return <div/>
  }
 }


const ReactCreateClass = React.createClass({
    render(){
        return <div/>
    }
})