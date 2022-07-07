<script lang="ts">
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
	} from '$lib/components'
	import { BrandFacebook } from 'tabler-icons-svelte'
	let isOpen = false
	const toggle = () => (isOpen = !isOpen)
</script>

<Navbar navbar={false} expand="md">
	<Collapse {isOpen} navbar expand="md">
		<Navbar container="xl" light>
			<Nav navbar>
				<NavItem active>
					<NavLink>
						<span class="nav-link-icon d-md-none d-lg-inline-block">
							<BrandFacebook />
						</span>
						<span class="nav-link-title"> Home </span>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://github.com/bestguy/sveltestrap">GitHub</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	</Collapse>
</Navbar>
