branch_name=$(shell git rev-parse --abbrev-ref HEAD)
image_name = damian0o/coding-tree:homepage-$(branch_name)	
container_name = ctf-homepage-$(branch_name)
deployment_dir = apso:coding-tree

build:
	docker build -t $(image_name) .
push:
	docker push $(image_name)
run:
	docker run -d --rm --name $(container_name) -p 9100:80 $(image_name)

rm:
	docker rm -f $(container_name)

archive:
	git archive --format=tar.gz -o /tmp/$(container_name).tar.gz develop

extract:
	tar -zxvf $(container_name).tar.gz

send:
	scp /tmp/$(container_name).tar.gz $(deployment_dir)/$(container_name).tar.gz

.PHONY: build push run rm archive extract send
