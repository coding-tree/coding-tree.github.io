branch_name=$(shell git rev-parse --abbrev-ref HEAD)
commit_short_hash=$(shell git rev-parse --short HEAD)
image_name = coding-tree-homepage:$(branch_name)
container_name = ct-homepage-$(branch_name)
deployment_dir = apso:coding-tree
aws_url_prefix = 102421067040.dkr.ecr.eu-central-1.amazonaws.com

AWS_LOGIN := $(@shell aws --profile ecradmin ecr get-login --region eu-central-1)

build:
	docker build --build-arg git_branch=$(branch_name) --build-arg git_commit=$(commit_short_hash) -t $(image_name) .

tag:
	docker tag $(image_name) $(aws_url_prefix)/$(image_name)
	docker tag $(image_name) $(aws_url_prefix)/$(image_name)-$(commit_short_hash)

aws-login:
	$(AWS_LOGIN)

push: aws-login
	docker push $(aws_url_prefix)/$(image_name)
	docker push $(aws_url_prefix)/$(image_name)-$(commit_short_hash)

deploy: build tag aws-login push
	echo "Build tag and push new docker image"

run:
	docker run -d --rm --name $(container_name) -p 9100:80 $(image_name)

rm:
	docker rm -f $(container_name)

archive:
	git archive --format=tar.gz -o /tmp/$(container_name).tar.gz $(branch_name)

extract:
	tar -zxvf $(container_name).tar.gz

send:
	scp /tmp/$(container_name).tar.gz $(deployment_dir)/$(container_name).tar.gz

.PHONY: build push aws-login deploy run rm archive extract send
