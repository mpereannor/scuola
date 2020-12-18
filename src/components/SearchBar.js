import SearchBar from "material-ui-search-bar";

const SearchBar = () => { 

return (
  <SearchBar
    value={this.state.value}
    onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() => doSomethingWith(this.state.value)}
  />
)
};