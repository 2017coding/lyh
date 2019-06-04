<script>
export default {
  name: 'Render',
  functional: true,
  props: {
    render: Function,
    item: Object
  },
  render: (h, context) => {
    const props = context.props
    return props.render(h, props.item)
  }
}
</script>
